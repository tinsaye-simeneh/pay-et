import React from "react";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login.tsx";
import Signup from "./pages/Auth/Signup.tsx";
import OTPConfirmation from "./components/OTPConfirmation.tsx";
import Pin from "./components/Pin.tsx";
import "@mantine/core/styles.css";

const App: React.FC = () => {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otp-confirmation" element={<OTPConfirmation />} />
          <Route path="/pin" element={<Pin />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
};

export default App;
