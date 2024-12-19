import React from 'react';

const NavigationButtons = ({ onPrev, onNext, showPrev }) => {
  return (
    <div className="flex justify-center space-x-4 mt-6">
      {showPrev && (
        <button
          onClick={onPrev}
          className="px-6 py-2 bg-white rounded-md shadow hover:bg-gray-50"
        >
          Prev
        </button>
      )}
      <button
        onClick={onNext}
        className="px-6 py-2 bg-white rounded-md shadow hover:bg-gray-50"
      >
        Next
      </button>
    </div>
  );
};

export default NavigationButtons;