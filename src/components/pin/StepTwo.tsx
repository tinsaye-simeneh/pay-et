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
      window.location.href = "/home";
    } else {
      console.log("Pin is invalid");
    }
  };

  return (
    <Container className="flex items-center justify-center min-h-screen px-10 mt-3 bg-white">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <img
          src="/logo.png"
          alt="Logo"
          width={150}
          height={150}
          className="mx-auto mb-6"
        />
        <p className="mb-4 text-xl font-bold text-left text-gray-700">
          Set a Pin Code
        </p>
        <p className="text-xs text-left text-gray-500 mb-7">
          Set a Pincode to use for an additional security
        </p>

        <div className="flex items-center justify-between">
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
          className="w-full px-4 py-2 text-sm text-white bg-green-500 rounded-md hover:bg-green-500 disabled:bg-gray-300"
          disabled={pin.length !== 6}
        >
          Verify
        </button>
      </div>
    </Container>
  );
};

export default StepTwo;
