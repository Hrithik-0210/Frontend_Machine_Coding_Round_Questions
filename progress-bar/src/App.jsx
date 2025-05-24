import { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return prev + 1;
      });
    }, 100);
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Progress Bar</h1>
      <ProgressBar value={value} />
    </div>
  );
}

export default App;
