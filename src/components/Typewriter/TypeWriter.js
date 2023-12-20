import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = ({
  style,
  words,
  loop,
  cursorStyle,
  typeSpeed,
  deleteSpeed,
  delaySpeed,
}) => {
  return (
    <div>
      <Typewriter
        style={style}
        words={words}
        loop={loop}
        cursorStyle={cursorStyle}
        typeSpeed={typeSpeed}
        deleteSpeed={deleteSpeed}
        delaySpeed={delaySpeed}
      />
    </div>
  );
};

export default TypeWriter;
