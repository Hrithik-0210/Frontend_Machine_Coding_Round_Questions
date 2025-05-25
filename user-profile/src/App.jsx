import { useState } from "react";
import "./App.css";

const user = {
  name: "Jane Doe",
  bio: "Frontend developer who loves React and coffee ☕️",
  image: "https://do6gp1uxl3luu.cloudfront.net/question-webp/dummyUser.jpg",
};

function App() {
  const [showBio, setShowBio] = useState(false);
  return (
    <div className="container">
      <div className="img-container">
        <img src={user.image} alt="" className="user-img" />
      </div>
      <div className="name-and-btn-container">
        <h3>{user.name}</h3>
        {showBio ? (
          <button onClick={() => setShowBio(false)}>Hide Bio</button>
        ) : (
          <button onClick={() => setShowBio(true)}>Show Bio</button>
        )}
      </div>
      {showBio ? <p>{user.bio}</p> : ""}
    </div>
  );
}

export default App;
