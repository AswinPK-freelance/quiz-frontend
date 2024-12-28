import React from "react";

const QuestionNumbers = ({
  totalQuestions,
  currentQuestion,
  onQuestionSelect,
  selectedAnswer,
}) => {
  const intArr = Object.keys(selectedAnswer).map((x) => parseInt(x));

  return (
    <div className="grid grid-cols-5 gap-2 mt-4">
      {Array.from({ length: totalQuestions }, (_, i) => {
        const questionNumber = i + 1;
        const isCurrent = questionNumber === currentQuestion;
        const isAnswered = intArr.includes(questionNumber);

        return (
          <button
            key={i}
            onClick={() => onQuestionSelect(questionNumber)}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isCurrent
                ? "bg-red-300 text-white"
                : isAnswered
                ? "bg-blue-200 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
          >
            {questionNumber}
          </button>
        );
      })}
    </div>
  );
};

export default QuestionNumbers;
