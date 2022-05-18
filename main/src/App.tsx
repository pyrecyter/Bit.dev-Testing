import "./App.css";
import Counter from "./components/counter";
import { showNotification } from "./components/notification";

function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
      <Counter initialValue={11} />
      <button onClick={() => showNotification({ message: "test message" })}>
        Show Notification
      </button>
    </div>
  );
}

export default App;
