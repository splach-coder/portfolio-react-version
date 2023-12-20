import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Layout = ({ children, activePage }) => {
  return (
    <div>
      <Header activePage={activePage} />
      {children}
      <Footer activePage={activePage} />
    </div>
  );
};

export default Layout;
