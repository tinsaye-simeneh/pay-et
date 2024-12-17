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
      window.location.href = "/home";
    } else {
      console.log("OTP is invalid");
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
          Check your phone
        </p>
        <p className="text-xs text-left text-gray-500 mb-7">
          A verification code has been sent to your phone.
        </p>

        <div className="flex items-center justify-between">
          <PinInput
            value={otp}
            onChange={handleInputChange}
            length={6}
            oneTimeCode
            className="mb-5 text-center"
            gap={24}
          />
        </div>

        <p className="mb-5 text-xs text-right text-black">
          Didn't get the code?
          <a href={"/resend-otp"} className="ml-1 text-green-500">
            Resend OTP
          </a>
        </p>
        <button
          onClick={() => handleSubmit()}
          fullWidth
          className="w-full px-4 py-2 text-sm text-white bg-green-500 rounded-md hover:bg-green-500"
        >
          Verify
        </button>
      </div>
    </Container>
  );
};

export default OTPConfirmation;
