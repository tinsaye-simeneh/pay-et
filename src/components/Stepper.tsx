import React, { useState } from "react";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["Welcome", "Next Step", "Prev Step", "Complete"];
  const stepContents = [
    {
      title: "",
      text: "",
      image: "/logo.png",
    },
    {
      title: "Welcome to PayET.",
      text: "Revolutionize Your Finances, One Tap at a Time!",
      image: "/Illustration-1.png",
    },
    {
      title: "Easy access, Whenever and Wherever you are.",
      text: "Effortless access, anytime, anywhere. Stay connected on the go.",
      image: "/Illustration-2.png",
    },
    {
      title: "Activate your account Now.",
      text: "Activate your account now and unlock endless possibilities!",
      image: "/Illustration-3.png",
    },
  ];

  const goToStep = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div className="flex flex-col justify-between h-[100vh] max-w-md p-5 mx-auto border border-gray-200 rounded-lg shadow-lg">
      <div className="flex flex-col items-center h-full py-10 mb-6 step-content">
        <img
          src={stepContents[currentStep].image}
          alt={stepContents[currentStep].title}
          className="w-full h-auto mt-10 mb-2 rounded-lg"
        />
        <h2 className="text-2xl font-bold text-center text-gray-700">
          {stepContents[currentStep].title}
        </h2>
        <p className="text-center text-gray-500">
          {stepContents[currentStep].text}
        </p>
      </div>

      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => goToStep(currentStep - 1)}
          disabled={currentStep === 0}
          className={`px-4 py-2 text-white rounded ${
            currentStep === 0 ? "bg-gray-300" : "bg-green-500"
          }`}
        >
          Previous
        </button>
        <button
          onClick={
            currentStep === steps.length - 1
              ? () => window.location.replace("/login")
              : () => goToStep(currentStep + 1)
          }
          className="px-4 py-2 text-white bg-green-500 rounded"
        >
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
