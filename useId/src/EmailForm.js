import React, { useId } from "react";

const EmailForm = () => {
  // hook used to generate same ID, mathRandom can fail
    const id = useId()
    return (
      <>
        <label htmlFor={id}>Email</label>
        <input id={id} type="email" />
      </>
    );
};

export default EmailForm;
