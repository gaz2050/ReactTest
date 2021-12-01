import React, { useReducer } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Calculator,
  Stopwatch,
  PaceConverter,
  RockPaperScissors,
  LogonDB,
  Whoops404,
} from "./Pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/paceconverter" element={<PaceConverter />} />
        <Route path="/rockpaperscissors" element={<RockPaperScissors />} />
        <Route path="/logon" element={<LogonDB />} />
        <Route path="/*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;
