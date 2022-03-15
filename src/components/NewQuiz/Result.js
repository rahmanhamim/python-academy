import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from "../../contexts/QuizProvider/QuizProvider";
import Analysis from "./Analysis";
import Summary from "./Summary";

const Result = () => {
 const [userAnswers, setUserAnswers] = useContext(QuizContext);
 // console.log("user answers", userAnswers);

 // function calculate() {
 //  let score = 0;

 //  // qna === userAnswers || sumit
 //  // answers === fetched data || sumit
 //  let correctIndexes = [];
 //  let checkedIndexs = [];

 //  userAnswers.forEach((question, index1) => {
 //   question.options.forEach((option, index2) => {
 //    if (option.checked === true) {
 //     checkedIndexs.push(option.id);
 //    }
 //   });
 //  });
 //  console.log(checkedIndexs);
 // }

 // calculate();

 let arr = [];
 let arr2 = [];
 console.log(userAnswers);

 userAnswers.forEach((element) => {
  console.log(element);
  element.options.forEach((option) => {
   if (element.right_answer === option.id && option.checked === true) {
    option.level = element.level;
    option.right = true;
    arr.push(option);
    // console.log(element);
   }
  });
  arr2.push(element);
 });

 // console.log(arr);
 // console.log(arr2);

 return (
  <div>
   <Summary correctAns={arr} userAnswersAll={userAnswers} />
   <Analysis />
  </div>
 );
};

export default Result;

// var correct = ["a", "b", "b", "c"];
// var answers = ["1", "b", "b", "1"];

// function checkExam(answerKey, studentResponse) {
//  return answerKey.reduce((score, answer, qIdx) => {
//   if (answer === studentResponse[qIdx]) {
//    score += 1;
//   } else if (studentResponse[qIdx] !== "") {
//    score += 0;
//   }
//   return score;
//  }, 0);
// }

// let result = checkExam(correct, answers);
// console.log(result);

// quiz data fetch

// const [quizData, setQuizData] = useState([]);

// useEffect(() => {
//  fetch("./quizContent.json")
//   .then((res) => res.json())
//   .then((data) => setQuizData(data));
// }, []);

// console.log("This is main data", quizData);
