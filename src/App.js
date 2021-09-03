import React from "react";
import Board, {createBoard} from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
      <h1 className="App-title"> Lights Out </h1>
      <Board />
    </div>
  );
}

export default App;
