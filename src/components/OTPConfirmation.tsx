import React, { useState } from "react";
import { Container, PinInput } from "@mantine/core";

const OTPConfirmation: React.FC = () => {
  const [otp, setOtp] = useState<string>("");

  const handleInputChange = (value: string) => {
    setOtp(value);
  };

  const handleSubmit = () => {
    if (otp.length === 6) {
      console.log("OTP Submitted:", otp);
      setOtp("");
      window.location.href = "/";
    } else {
      console.log("OTP is invalid");
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
          Check your phone
        </p>
        <p className="text-left text-xs mb-7 text-gray-500">
          A verification code has been sent to your phone.
        </p>

        <div className="flex justify-between items-center">
          <PinInput
            value={otp}
            onChange={handleInputChange}
            length={6}
            oneTimeCode
            className="mb-5 text-center"
            gap={24}
          />
        </div>

        <p className="text-black text-right text-xs mb-5">
          Didn't get the code?
          <a href="/" className="text-green-500 ml-1">
            Resend OTP
          </a>
        </p>
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

export default OTPConfirmation;
