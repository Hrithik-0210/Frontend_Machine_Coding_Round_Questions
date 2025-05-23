import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
