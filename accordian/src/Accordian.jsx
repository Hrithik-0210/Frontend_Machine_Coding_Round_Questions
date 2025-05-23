import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../src/index.css";

const Accordian = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  function handleToggleAccordian(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="accordian-container">
      {items.map((item, index) => (
        <div className="item">
          <button
            className="item-heading"
            onClick={() => handleToggleAccordian(index)}
          >
            {item.title}
            {openIndex == index ? (
              <FaChevronUp className="arrow" />
            ) : (
              <FaChevronDown className="arrow" />
            )}
          </button>
          {openIndex == index ? (
            <div className="item-content">{item.content}</div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
