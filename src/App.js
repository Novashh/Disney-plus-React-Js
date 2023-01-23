import React from "react";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
