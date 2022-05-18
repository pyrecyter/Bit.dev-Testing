import React from "react";
import "./App.css";
import Counter from "@pyrecyter/cportaltest.counter";

function App() {
  return (
    <div className="App">
      <h1>Loading from bit.dev</h1>
      <Counter initialValue={10} />
    </div>
  );
}

export default App;
