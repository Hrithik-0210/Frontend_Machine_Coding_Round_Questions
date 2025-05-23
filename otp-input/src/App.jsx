import { useState } from "react";
import "./App.css";
import { useRef } from "react";
import { useEffect } from "react";

const digit_count = 5;

function App() {
  const [inputArray, setInputArray] = useState(new Array(digit_count).fill(""));

  const refElement = useRef([]);

  function handleOtpInput(value, index) {
    if (isNaN(value)) return;

    const newArr = [...inputArray];
    const newVal = value.trim();
    newArr[index] = newVal.slice(-1);
    setInputArray(newArr);
    newVal && refElement.current[index + 1]?.focus();
  }

  function handleOnKeyDown(index, e) {
    if (!e.target.value && e.key === "Backspace") {
      refElement.current[index - 1]?.focus();
    }
  }

  function handleOnPaste(e) {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    if (!/^\d+$/.test(pastedData)) return;
    const digit = pastedData.split("").slice(0, digit_count);
    // console.log(pastedData);
    // console.log(digit);
    const newArr = [...digit];
    setInputArray(newArr);
  }

  useEffect(() => {
    refElement.current[0]?.focus();
  }, []);

  return (
    <div className="container">
      <h1>Validate OTP</h1>
      <div>
        {inputArray.map((input, index) => (
          <input
            key={index}
            type="text"
            className="inputBox"
            value={inputArray[index]}
            ref={(input) => (refElement.current[index] = input)}
            onChange={(e) => handleOtpInput(e.target.value, index)}
            onKeyDown={(e) => handleOnKeyDown(index, e)}
            onPaste={(e) => handleOnPaste(e)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
