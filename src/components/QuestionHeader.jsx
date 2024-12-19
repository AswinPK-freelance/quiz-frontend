import React from "react";

const QuestionHeader = ({ currentQuestion, totalQuestions }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <span className="text-gray-600">
        Question {currentQuestion}/{totalQuestions}
      </span>
      <button className="text-blue-500 hover:text-blue-600">Need Help ?</button>
    </div>
  );
};

export default QuestionHeader;
