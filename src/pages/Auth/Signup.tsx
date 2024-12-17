import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Text,
  Container,
  Stack,
} from "@mantine/core";

const Signup: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlSignup = () => {
    window.open("/login");
    console.log({ phone, password });
  };

  return (
    <Container className="flex items-center justify-center min-h-screen px-4 mt-3 bg-white ">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <img
          src="/logo.png"
          alt="Logo"
          width={150}
          height={150}
          className="mx-auto mb-6"
        />
        <p className="mb-4 text-xl font-bold text-left text-gray-700">
          Create an account
        </p>
        <p className="text-xs text-left text-gray-500 mb-7">
          Welcome friend, enter your details so lets get started in financing.
        </p>

        <Stack gap="lg">
          <TextInput
            label="Phone Number"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(event) => setPhone(event.currentTarget.value)}
            classNames={{ label: "text-sm", input: "text-sm" }}
          />
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            classNames={{ label: "text-sm", input: "text-sm" }}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.currentTarget.value)}
            classNames={{ label: "text-sm", input: "text-sm" }}
          />
          <p className="text-xs text-right text-black">
            Already has an account?
            <a href="/login" className="ml-1 text-green-500">
              Login Instead
            </a>
          </p>
          <button
            onClick={handlSignup}
            className="w-full px-4 py-2 text-sm text-green-500 bg-white border border-green-500 rounded-md hover:text-white hover:bg-green-500 disabled:bg-gray-300 disabled:border-none disabled:text-black"
            disabled={
              phone.length === 0 ||
              password.length === 0 ||
              confirmPassword.length === 0
            }
          >
            Create Account
          </button>
        </Stack>
      </div>
    </Container>
  );
};

export default Signup;
