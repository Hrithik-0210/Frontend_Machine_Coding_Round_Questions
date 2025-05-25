import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  console.log(password);
  console.log(showPassword);

  return (
    <div className="input-container">
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        className="input-box"
        placeholder="Enter password"
        onChange={(e) => handlePassword(e)}
      />
      <button className="show-hide-btn" onClick={handleShowPassword}>
        show
      </button>
    </div>
  );
}

export default App;
