import React, { useState, useEffect, useReducer } from "react";
import Question from "./Question";
import QuizAnswers from "./QuizAnswers";
import _ from "lodash";

const initialState = null;

const reducer = (state, action) => {
 switch (action.type) {
  case "questions":
   action.value.forEach((options) => {
    options.options.forEach((option) => {
     option.checked = false;
    });
   });
   return action.value;

  case "answer":
   const questions = _.cloneDeep(state);
   questions[action.questionID].options[action.optionIndex].checked =
    action.value;
   return questions;

  default:
   return state;
 }
};

const Quiz = () => {
 const [currentQuestion, setCurrentQuestion] = useState(0);
 const [questions, setQuestions] = useState([]);
 useEffect(() => {
  fetch("./quizContent.json")
   .then((res) => res.json())
   .then((data) => setQuestions(data));
 }, []);

 const [qna, dispatch] = useReducer(reducer, initialState);

 useEffect(() => {
  dispatch({
   type: "questions",
   value: questions,
  });
 }, [questions]);

 if (qna) {
  console.log("this is qna", qna);
 }

 const handleAnswerChange = (e, index) => {
  dispatch({
   type: "answer",
   questionID: currentQuestion,
   optionIndex: index,
   value: e.target.checked,
  });
 };

 // handle when user clicks next button
 const nextQuestoinBtn = () => {
  if (currentQuestion < questions.length) {
   setCurrentQuestion((prevCurrentQues) => prevCurrentQues + 1);
  }
 };

 return (
  <>
   <h1>{qna && qna[currentQuestion]?.question}</h1>
   {qna && (
    <QuizAnswers
     options={qna[currentQuestion]?.options}
     handleChange={handleAnswerChange}
     next={nextQuestoinBtn}
    />
   )}
  </>
 );
};

export default Quiz;
