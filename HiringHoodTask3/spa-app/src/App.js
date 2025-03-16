import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import "./App.css";

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <h1>React SPA</h1>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
