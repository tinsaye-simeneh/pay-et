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
    console.log({ phone, password });
  };

  return (
    <Container className="mt-10 px-4 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-sm w-full bg-white p-6 rounded-lg shadow-md">
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={150}
          className="mx-auto mb-6"
        />
        <Title className="text-center text-xs mb-4">
          Good to see you again, enter your details below and start financing.
        </Title>
        <Title className="text-center text-xl mb-4">
          Login to your account
        </Title>
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
          <Text className="text-blue-500 text-right text-xs">
            Forgot Password?
            <a href="forgot" className="text-blue-500">
              Click here
            </a>
          </Text>
          <div className="flex justify-between items-center">
            <Button
              onClick={handleLogin}
              fullWidth
              className="bg-green-500 hover:bg-green-500"
            >
              Login
            </Button>
          </div>
          <Button
            variant="outline"
            fullWidth
            onClick={() => {}}
            className="text-sm text-green-500 mt-1"
          >
            Create Account
          </Button>
        </Stack>
      </div>
    </Container>
  );
};

export default Login;
