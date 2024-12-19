import React from "react";

const QuestionNumbers = ({
  totalQuestions,
  currentQuestion,
  onQuestionSelect,
}) => {
  return (
    <div className="grid grid-cols-5 gap-2 mt-4">
      {Array.from({ length: totalQuestions }, (_, i) => (
        <button
          key={i}
          onClick={() => onQuestionSelect(i + 1)}
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            i + 1 === currentQuestion
              ? "bg-red-300 text-white"
              : i + 1 < currentQuestion
              ? "bg-blue-200 text-white"
              : "bg-gray-300 text-gray-600"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default QuestionNumbers;
