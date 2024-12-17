import React, { useState } from "react";
import { Container, PinInput } from "@mantine/core";

const StepTwo: React.FC = () => {
  const [pin, setPin] = useState<string>("");

  const handleInputChange = (value: string) => {
    setPin(value);
  };

  const handleSubmit = () => {
    if (pin.length === 6) {
      console.log("Pin Submitted:", pin);
      setPin("");
      window.location.href = "/";
    } else {
      console.log("Pin is invalid");
    }
  };

  return (
    <Container className="mt-3 bg-white min-h-screen flex items-center justify-center px-10">
      <div className="max-w-sm w-full bg-white p-6 rounded-lg shadow-md">
        <img
          src="/logo.png"
          alt="Logo"
          width={150}
          height={150}
          className="mx-auto mb-6"
        />
        <p className="text-left text-xl text-gray-700 mb-4 font-bold">
          Set a Pin Code
        </p>
        <p className="text-left text-xs mb-7 text-gray-500">
          Set a Pincode to use for an additional security
        </p>

        <div className="flex justify-between items-center">
          <PinInput
            value={pin}
            onChange={handleInputChange}
            length={6}
            oneTimeCode
            className="mb-5 text-center"
            gap={24}
          />
        </div>

        <button
          onClick={() => handleSubmit()}
          fullWidth
          className="bg-green-500 hover:bg-green-500 text-white text-sm px-4 py-2 rounded-md w-full"
        >
          Verify
        </button>
      </div>
    </Container>
  );
};

export default StepTwo;
