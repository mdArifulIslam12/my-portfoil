import React from "react";
import TypeWriterEffect from "react-typewriter-effect";



export const Type = () => {
  return (
    <TypeWriterEffect
    textStyle={{
      color: "#CF5FF8",
      fontWeight: 700,
      fontSize: "40px",
    }}
    startDelay={2000}
    cursorColor="#fff"
    multiText={["Front End Developer","Mern Stack Developer"]}
    multiTextLoop={true}
    multiTextDelay={500}
    typeSpeed={200}
  />
  );
};
