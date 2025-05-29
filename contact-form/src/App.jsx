import { useState } from "react";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({});
  const [thankYouMessage, setThankYouMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newError = {};
    const regexCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) {
      newError.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newError.email = "Email is required";
    } else if (regexCheck.test(formData.email)) {
      newError.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newError.message = "Message is required";
    }

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    setThankYouMessage(`Thank you, ${formData.name}!`);
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <div className="form-container">
      {!thankYouMessage ? (
        <form onSubmit={handleSubmit} className="form">
          <label>Name : </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          {error.name && <span style={{ color: "red" }}>{error.name}</span>}

          <label>Email :</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {error.email && <span style={{ color: "red" }}>{error.email}</span>}

          <label>Message : </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {error.message && (
            <span style={{ color: "red" }}>{error.message}</span>
          )}

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      ) : (
        <h1>{thankYouMessage}</h1>
      )}
    </div>
  );
}

export default App;
