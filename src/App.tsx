import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { C1, C2, C3, C4, C5 } from "./components";

function App() {
  return (
    <div className="App">
      <C1 timeRange="sec" />
      <C2 timeRange="min" />
      <C3 timeRange="hour" />
      <C4 timeRange="day" />
      <C5 timeRange="week" />
    </div>
  );
}

export default App;
