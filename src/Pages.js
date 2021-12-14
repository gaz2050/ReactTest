import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h2>
        {""}
        <Link to="/"> Home </Link>
      </h2>
      <nav>
        <Link to="/stopwatch"> Home </Link>
        <Link to="/calculator"> Home </Link>
        <Link to="/paceComverter"> Home </Link>
        <Link to="/rockpaperscissors"> Home </Link>
        <Link to="/logonDB"> Home </Link>
      </nav>
    </div>
  );
}

export function Stopwatch() {
  return (
    <div>
      <h2>Stopwatch</h2>
    </div>
  );
}
export function Calculator() {
  return (
    <div>
      <h2>Calc</h2>
    </div>
  );
}

export function PaceConverter() {
  return (
    <div>
      <h2>Pac</h2>
    </div>
  );
}

export function LogonDB() {
  return (
    <div>
      <h2>Logon</h2>
    </div>
  );
}

export function RockPaperScissors() {
  return (
    <div>
      <h2>Rock Paper Scissors</h2>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  return (
    <div>
      <h2>Wrong pages idiot! There is no {location.pathname} </h2>
    </div>
  );
}
