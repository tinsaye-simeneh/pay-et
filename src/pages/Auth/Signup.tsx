import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Title,
  Container,
  Stack,
} from "@mantine/core";

const Signup: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log({ phone, password });
  };

  return (
    <Container className="mt-10 px-4">
      <Title className="text-center text-lg mb-4">Sign Up</Title>
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
        <Button
          onClick={handleSignup}
          fullWidth
          className="bg-green-500 hover:bg-green-600"
        >
          Sign Up
        </Button>
      </Stack>
    </Container>
  );
};

export default Signup;
