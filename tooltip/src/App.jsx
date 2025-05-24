import { useState } from "react";
import "./App.css";

const icons = [
  { emoji: "🏠", label: "Home" },
  { emoji: "📧", label: "Email" },
  { emoji: "⚙️", label: "Settings" },
];

function App() {
  const [hoverIndex, setHoverIndex] = useState(null);

  function handleMouseEnter(index) {
    setHoverIndex(index);
  }
  function handleMouseLeave() {
    setHoverIndex(null);
  }
  return (
    <div className="main-container">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="icons-container"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <span className={`tooltip ${hoverIndex === index ? "visible " : ""}`}>
            {icon.label}
          </span>
          <span>{icon.emoji}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
