import React from "react";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login.tsx";
import Signup from "./pages/Auth/Signup.tsx";
import OTPConfirmation from "./components/OTPConfirmation.tsx";
import StepOne from "./components/pin/StepOne.tsx";
import StepTwo from "./components/pin/StepTwo.tsx";
import "@mantine/core/styles.css";
import Home from "./pages/Home.tsx";
import QrScan from "./pages/QrScan.tsx";

const App: React.FC = () => {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otp-confirmation" element={<OTPConfirmation />} />
          <Route path="/pin/step-one" element={<StepOne />} />
          <Route path="/pin/step-two" element={<StepTwo />} />
          <Route path="/qr-scan" element={<QrScan />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
};

export default App;
