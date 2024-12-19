import React from "react";

const SuccesCard = ({ handlePreviousStage, handleNextStage, stage }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-medium text-green-600 mb-6">
        Congratulations! You have completed Stage {stage}.
      </h2>

      <p className="text-lg text-gray-800 mb-6">
        You have successfully completed the current stage. Keep going and move
        on to the next one.
      </p>
      <div className="flex justify-between space-x-4">
        <button
          onClick={handlePreviousStage}
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors hover:bg-gray-400"
        >
          Back to stage {stage}
        </button>
        <button
          onClick={handleNextStage}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium transition-colors hover:bg-blue-700"
        >
          Next Stage
        </button>
      </div>
    </div>
  );
};

export default SuccesCard;
