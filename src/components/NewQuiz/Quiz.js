import React, { useState, useEffect, useReducer, useContext } from "react";
import Question from "./Question";
import QuizAnswers from "./QuizAnswers";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../../contexts/QuizProvider/QuizProvider";

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
  // console.log("this is qna", qna);
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
 const [btnText, setBtnText] = useState("Next Question");
 const nextQuestoinBtn = () => {
  const questionlength = questions.length - 1;

  if (currentQuestion < questionlength - 1) {
   setCurrentQuestion((prevCurrentQues) => prevCurrentQues + 1);
  } else if (questionlength - 1 === currentQuestion) {
   setCurrentQuestion((prevCurrentQues) => prevCurrentQues + 1);
   setBtnText("Submit");
  } else if (questionlength === currentQuestion) {
   //  console.log(qna);
   alert("final question reached");
   submit();
  }
 };

 const [userAnswers, setUserAnswers] = useContext(QuizContext); // from context api

 //  submit function
 const history = useNavigate();
 async function submit() {
  setUserAnswers(qna);
  history("/result");
 }

 return (
  <>
   <h1>{qna && qna[currentQuestion]?.question}</h1>
   {qna && (
    <QuizAnswers
     options={qna[currentQuestion]?.options}
     handleChange={handleAnswerChange}
     next={nextQuestoinBtn}
     btnText={btnText}
    />
   )}
  </>
 );
};

export default Quiz;
