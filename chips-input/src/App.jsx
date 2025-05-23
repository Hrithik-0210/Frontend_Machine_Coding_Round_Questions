import React, { useEffect, useState } from "react";

const App = () => {
  const [chips, setChips] = useState("");
  const [tags, setTags] = useState([]);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      if (chips.trim() !== "") {
        setTags((prev) => [...prev, chips.trim()]);
        setChips("");
      }
    }
  }

  function handleDeleteTag(tagToRemove) {
    setTags((prevtags) => prevtags.filter((tag) => tag !== tagToRemove));
  }

  useEffect(() => {
    console.log(tags);
  }, [tags]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "40px 0",
        }}
      >
        <h2>Chips Input</h2>
        <input
          type="text"
          placeholder="Type a chip and press tag"
          style={{ padding: "8px", width: "200px" }}
          value={chips}
          onChange={(e) => setChips(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          margin: "40px 0px",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {tags.map((tag, index) => {
          return (
            <li
              key={index}
              style={{
                border: "1px solid black",
                padding: "14px",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <span>{tag}</span>
              <button onClick={() => handleDeleteTag(tag)}>X</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
