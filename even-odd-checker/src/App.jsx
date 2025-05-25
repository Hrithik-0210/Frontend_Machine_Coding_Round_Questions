import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkEvenOrOdd = () => {
    setResult(null);
    setLoading(true);

    setTimeout(() => {
      const parsed = parseInt(number, 10);
      if (isNaN(parsed)) {
        setResult("Please enter a valid number.");
      } else {
        setResult(
          `The number ${parsed} is ${parsed % 2 == 0 ? "even" : "odd"}. `
        );
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container">
      <h1 className="heading">Even Odd Checker</h1>
      <div className="checking-container">
        <input
          type="text"
          className="input-box"
          placeholder="Enter number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button className="check-btn" onClick={checkEvenOrOdd}>
          Check
        </button>
      </div>
      <div className="result-area">
        {loading ? (
          <div className="loading">Checking...</div>
        ) : result !== null ? (
          <div className="result">{result}</div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
