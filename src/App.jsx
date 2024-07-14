import { Route, Routes } from "react-router-dom";
import "./App.css";
import TheNavigation from "../components/TheNavigation";

function App() {
  return (
    <div>
      <header>
        <TheNavigation />
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<h1>HomePage</h1>} />
          <Route path="tunes" element={<h1>Tunes</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
