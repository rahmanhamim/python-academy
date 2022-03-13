import { Button } from "@mui/material";
import React from "react";
import Checkbox from "./Checkbox";

const QuizAnswers = ({ options = [], handleChange, next }) => {
 console.log("from quiz answer component", options);
 return (
  <div style={{ border: "1px solid green" }}>
   <span>this is answer component</span> <br /> <br />
   {options.map((option, index) => (
    <Checkbox
     style={{ marginLeft: "2em" }}
     key={option.id}
     text={option.option}
     value={index}
     checked={option.checked}
     onChange={(e) => handleChange(e, index)}
    />
   ))}
   <br />
   <Button variant="contained" onClick={next}>
    Next Question
   </Button>
  </div>
 );
};

export default QuizAnswers;
