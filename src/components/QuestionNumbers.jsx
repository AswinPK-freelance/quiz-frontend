import React, { useEffect, useState } from "react";

const QuestionNumbers = ({
  totalQuestions,
  currentQuestion,
  onQuestionSelect,
  selectedAnswer,
}) => {
  const [intState, setintState] = useState();

  useEffect(() => {
    test();
  }, []);

  const test = async (callback) => {
    await apicall;
    callback();
  };
  console.log(selectedAnswer, "-----");
  console.log(currentQuestion, "-----------------");
  console.log(Object.keys(selectedAnswer), "OBJEt");
  const intArr = Object.keys(selectedAnswer).map((x) => parseInt(x));
  console.log(intArr, "INT ARRY");
  console.log("THE Branch tets aded");
  console.log(intArr); // [1, 2, 3, 4, 5]

  if (intArr.includes(currentQuestion)) {
    console.log("Inclide");
  } else {
    console.log("NOt");
  }

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
          // className={`w-10 h-10 rounded-full flex items-center justify-center ${
          //   intState.includes(currentQuestion)
          //     ? "bg-blue-200 text-white"
          //     : "bg-red-300 text-white"
          // }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default QuestionNumbers;
