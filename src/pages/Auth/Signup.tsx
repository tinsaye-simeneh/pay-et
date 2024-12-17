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
    console.log({ phone, password });
  };

  return (
    <Container className="mt-3 px-4 bg-white min-h-screen flex items-center justify-center ">
      <div className="max-w-sm w-full bg-white p-6 rounded-lg shadow-md">
        <img
          src="/logo.png"
          alt="Logo"
          width={150}
          height={150}
          className="mx-auto mb-6"
        />
        <p className="text-left text-xl text-gray-700 mb-4 font-bold">
          Create an account
        </p>
        <p className="text-left text-xs mb-7 text-gray-500">
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
          <p className="text-black text-right text-xs">
            Already has an account?
            <a href="/login" className="text-green-500 ml-1">
              Login Instead
            </a>
          </p>
          <button className="bg-white hover:text-white hover:bg-green-500 text-green-500 text-sm px-4 py-2 rounded-md w-full border border-green-500">
            Create Account
          </button>
        </Stack>
      </div>
    </Container>
  );
};

export default Signup;
