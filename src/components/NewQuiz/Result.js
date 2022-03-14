import React, { useContext } from "react";
import { QuizContext } from "../../contexts/QuizProvider/QuizProvider";
import Analysis from "./Analysis";
import Summary from "./Summary";

const Result = () => {
 const [userAnswers, setUserAnswers] = useContext(QuizContext);
 console.log("from result page", userAnswers);
 return (
  <div>
   <Summary />
   <Analysis />
  </div>
 );
};

export default Result;
