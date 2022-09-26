import React, { useImperativeHandle } from "react";

const CustomInput = ({ style, ...props }, ref) => {
  useImperativeHandle(ref, () => {
    return { alertHi: () => alert("hi") };
  }, []);

  return (
    <input
      {...props}
      //pass ref from APP.js
      ref={ref}
      style={{
        border: "none",
        backgroundColor: "lightpink",
        padding: ".25rem",
        borderBottom: ".1em solid black",
        borderTopRightRadius: ".25em",
        borderTopLeftRadius: ".25em",
        ...style,
      }}
    />
  );
};

export default React.forwardRef(CustomInput);
