import "./App.css";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
      <Counter initialValue={11} />
    </div>
  );
}

export default App;
