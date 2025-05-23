import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResult] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    //here we checking if the result is present int our cache then we did not make an api call here just return the resutt from our cache
    if (cache[searchInput]) {
      setResults(cache[searchInput]);
      return;
    }
    // if the searchinput is not present in our cache then we make an api call
    console.log("calling api  for : ", searchInput);
    const response = await fetch(
      "https://dummyjson.com/recipes/search?q=" + searchInput
    );
    const data = await response.json();
    setResults(data?.recipes);
    setCache((prev) => ({ ...prev, [searchInput]: data?.recipes }));
  };

  // console.log(cache);

  useEffect(() => {
    if (searchInput.trim() !== "") {
      let timerId = setTimeout(() => {
        fetchData();
      }, 400);
      setShowResult(true);
      return () => {
        clearTimeout(timerId);
      };
    } else {
      setResults([]);
      setShowResult(false);
    }
  }, [searchInput]);

  // console.log(results);

  return (
    <div className="search-box-container">
      <h1>Autocomplete Search Box</h1>
      <div className="input-box-container">
        <input
          type="text"
          placeholder="Search here"
          className="input-box"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onBlur={() => setShowResult(false)}
          onFocus={() => setShowResult(true)}
        />
        {showResults && results.length > 0 ? (
          <ul className="suggestion-container">
            {results &&
              results.slice(0, 10).map((result) => (
                <li key={result.id} className="suggestion">
                  {result.name}
                </li>
              ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
