import React from "react";

const Summary = ({ correctAns, userAnswersAll }) => {
 console.log(correctAns);
 return (
  <div>
   <h1>This is summary</h1>
   <h3>
    Your score is
    <span style={{ color: "green", fontSize: "2rem" }}>
     {correctAns.length}
    </span>
    out of {userAnswersAll.length}
   </h3>
  </div>
 );
};

export default Summary;
