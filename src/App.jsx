// App.js
import React from "react";
import "./App.css";
import Lottery from "./Lottery";

function App() {
  return (
    <div className="App">
      <Lottery n={3} winningsum={15} />
    </div>
  );
}

export default App;
