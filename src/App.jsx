import { Route, Routes } from "react-router-dom";
import "./App.css";
import TheNavigation from "../components/TheNavigation";
import Tunes from "../components/Tunes";
import Home from "../components/Home";
import About from "../components/About";

function App() {
  return (
    <div>
      <header>
        <TheNavigation />
      </header>
      <main className="content">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="tunes" Component={Tunes} />
          <Route path="/about" Component={About} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
