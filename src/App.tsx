import React from "react";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login.tsx";
import Signup from "./pages/Auth/Signup.tsx";
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
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
};

export default App;
