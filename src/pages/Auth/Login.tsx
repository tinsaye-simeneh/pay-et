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
    window.location.replace("/home");
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
          Login to your account
        </p>
        <p className="text-xs text-left text-gray-500 mb-7">
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
          <p className="text-xs text-right text-black">
            Forgot Password?
            <a href="forgot" className="ml-1 text-green-500">
              Click here
            </a>
          </p>
          <div className="flex items-center justify-between">
            <button
              onClick={handleLogin}
              fullWidth
              className="w-full px-4 py-2 text-sm text-white bg-green-500 rounded-md hover:bg-green-500 disabled:bg-gray-300"
              disabled={phone.length === 0 || password.length === 0}
            >
              Login
            </button>
          </div>
          <a href="/signup">
            <button className="w-full px-4 py-2 text-sm text-green-500 bg-white border border-green-500 rounded-md hover:text-white hover:bg-green-500">
              Create Account
            </button>
          </a>
        </Stack>
      </div>
    </Container>
  );
};

export default Login;
