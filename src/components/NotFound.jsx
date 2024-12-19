import React from "react";

function NotFound({ stage, handleBacktoHome }) {
  return (
    <div className="text-center mb-8">
      {stage === 1 ? (
        <h1 className="text-4xl font-bold text-red-500 bg-white rounded-full py-4 px-8 inline-block shadow-md">
          No Questions Added Here
        </h1>
      ) : (
        <div className="bg-green-100 p-6 rounded-lg shadow-lg inline-block">
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            You Have Completed Your Questions
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Congratulations! You've finished the current stage of the quiz.
          </p>
          <button
            onClick={handleBacktoHome}
            className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
          >
            Back to Stage 1
          </button>
        </div>
      )}
    </div>
  );
}

export default NotFound;
