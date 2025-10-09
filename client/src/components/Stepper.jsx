import React from 'react'

const Stepper = ({ questions, currentIndex }) => {
  const windowSize = 4;

  let start = currentIndex < windowSize ? 0 : currentIndex;
  if (start > questions.length - windowSize) {
    start = questions.length - windowSize;
  }

  const steps = questions
    .slice(start, start + windowSize)
    .map((q, i) => ({ ...q, absoluteIndex: start + i })); 

  return (
    <div className="flex items-center mb-6">
      {steps.map((step, idx) => (
        <React.Fragment key={step.absoluteIndex}>
          <div
            className={`rounded-full ${
              step.absoluteIndex === currentIndex
                ? "bg-blue-500"
                : "bg-blue-900"
            } w-6 h-6 text-center`}
          >
            {step.absoluteIndex + 1}
          </div>
          {idx < steps.length - 1 && (
            <span className="h-1 w-8 bg-blue-900"></span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
