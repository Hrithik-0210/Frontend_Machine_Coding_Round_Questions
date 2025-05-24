import { useEffect, useState } from "react";
import "../App.css";

const ProgressBar = ({ value }) => {
  const [currPercent, setCurrPercent] = useState(value);

  useEffect(() => {
    setCurrPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          transform: `translateX(${currPercent - 100}%)`,
        }}
      >
        <span>{currPercent.toFixed()}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
