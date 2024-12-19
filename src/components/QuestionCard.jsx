import React, { useEffect, useState } from "react";

const QuestionCard = ({ question, selectedAnswer, onAnswerSelect }) => {
  const [isExplanationVisible, setIsExplanationVisible] = useState(false);

  useEffect(() => {
    setIsExplanationVisible(false);
  }, [question?._id]);

  const handleExplanationToggle = () => {
    setIsExplanationVisible(!isExplanationVisible);
  };

  const getButtonColor = (index) => {
    if (isExplanationVisible) {
      if (selectedAnswer === index) {
        return selectedAnswer === question.correctOption
          ? "bg-green-100 border-green-300"
          : "bg-red-100 border-red-300";
      }
    } else {
      return selectedAnswer === index
        ? "bg-blue-100 border-blue-300"
        : "bg-gray-50 border-gray-200 hover:bg-gray-100";
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="mb-6 p-4 border-2 border-blue-400 shadow-sm rounded-lg">
        <h2 className="text-lg font-medium text-gray-800">{question?.text}</h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(index)}
            className={`w-full text-left p-4 rounded-lg border transition-colors ${getButtonColor(
              index
            )}`}
          >
            {option}
          </button>
        ))}
      </div>
      {selectedAnswer !== undefined && (
        <button
          onClick={handleExplanationToggle}
          className="mt-4 text-blue-600 "
        >
          {isExplanationVisible ? "Hide Explanation" : "Show Explanation"}
        </button>
      )}
      {isExplanationVisible && (
        <div className="mt-4 bg-gray-100 p-4 rounded-lg border border-gray-300">
          <p className="text-gray-800">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
