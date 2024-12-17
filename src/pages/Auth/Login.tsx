import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Container,
  Stack,
  Image,
} from "@mantine/core";

const Login: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    window.location.replace("/");
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
          Login to your account
        </p>
        <p className="text-left text-xs mb-7 text-gray-500">
          Good to see you again, enter your details below and start financing.
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
          <p className="text-black text-right text-xs">
            Forgot Password?
            <a href="forgot" className="text-green-500 ml-1">
              Click here
            </a>
          </p>
          <div className="flex justify-between items-center">
            <button
              onClick={handleLogin}
              fullWidth
              className="bg-green-500 hover:bg-green-500 text-white text-sm px-4 py-2 rounded-md w-full disabled:bg-gray-300"
              disabled={phone.length === 0 || password.length === 0}
            >
              Login
            </button>
          </div>
          <a href="/signup">
            <button className="bg-white hover:text-white hover:bg-green-500 text-green-500 text-sm px-4 py-2 rounded-md w-full border border-green-500">
              Create Account
            </button>
          </a>
        </Stack>
      </div>
    </Container>
  );
};

export default Login;
