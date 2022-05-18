import React from "react";
import "./App.css";
import Counter from "@pyrecyter/cportaltest.counter";
import { showNotification } from "@pyrecyter/cportaltest.notification";

function App() {
  return (
    <div className="App">
      <h1>Loading from bit.dev</h1>
      <Counter initialValue={10} />
      <h2>Show notification</h2>
      <button onClick={() => showNotification({ message: "showing test msg" })}>
        Show Notification
      </button>
    </div>
  );
}

export default App;
