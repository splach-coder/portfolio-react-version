import React, { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Button from "../Button/Button";
import { db } from "../../firebase.config";
import { collection, addDoc } from "firebase/firestore";
import Popup from "../PopUp/Popup";
import {  AnimatePresence } from "framer-motion";
const ContactMe = () => {
  const emailsCollectionRef = collection(db, "emails");
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const errorStyles = "placeholder:text-red-500 border-b-2 border-red-500";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateForm();
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    // Name validation
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    // Message validation
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      valid = false;
    }

    // Message validation
    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        //Add data to the 'emails' collection in Firestore
        await addDoc(emailsCollectionRef, formData);

        //Reset the form after successful submission
        setFormData({ name: "", email: "", message: "" });

        setPopupOpen(true);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  const handleClose = () => setPopupOpen(false);

  return (
    <section className="ms-[20px] mt-[100px] md:mt-[150px] bg-black" id="contactme">
      <SectionHeader
        icon="{*}"
        title="&lt;Contact me&gt;"
        desc="...Ready to bring your digital ideas to life? Let's chat and turn your vision into a reality! Contact me now to start the journey."
      />

      <div className="w-full pb-5 flex flex-col items-center">
        <div className="w-[80%]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4">
            <input
              type="text"
              id="name"
              name="name"
              className={`py-7 min-w-full  outline-none  bg-transparent text-purple text-desc leading-[20px] ease duration-200 transition-all focus:border-b-2 focus:border-purple  ${
                errors.name
                  ? errorStyles
                  : "placeholder:text-purple border-b border-grey"
              }`}
              placeholder="_name*"
              value={formData.name}
              onChange={handleChange}
            />
            <div className="text-red-500 w-full text-left">{errors.name}</div>

            <input
              type="email"
              id="email"
              name="email"
              className={`py-7 min-w-full  outline-none  bg-transparent text-purple text-desc leading-[20px] ease duration-200 transition-all focus:border-b-2 focus:border-purple  ${
                errors.email
                  ? errorStyles
                  : "placeholder:text-purple border-b border-grey"
              }`}
              placeholder="_email*"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="text-red-500 w-full text-left">{errors.email}</div>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              className={`py-7 min-w-full  outline-none  bg-transparent text-purple text-desc leading-[20px] ease duration-200 transition-all focus:border-b-2 focus:border-purple  ${
                errors.message
                  ? errorStyles
                  : "placeholder:text-purple border-b border-grey"
              }`}
              placeholder="_message*"
              value={formData.message}
              onChange={handleChange}></textarea>
            <div className="text-red-500 w-full text-left">
              {errors.message}
            </div>
            {/* devider  */}
            <div className="border-s border-grey w-0 h-12 md:h-24"></div>
            <Button type="submit">{"{send}"}</Button>
          </form>
        </div>
      </div>

      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        mode={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}>
        {popupOpen && (
          <Popup handleClose={handleClose} text={"message sent succesfully"} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactMe;
