import React from "react";

const Checkbox = ({ text, ...rest }) => {
 return (
  <label htmlFor="">
   <input type="checkbox" {...rest} />
   <span>{text}</span>
  </label>
 );
};

export default Checkbox;
