import { Route, NavLink, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" className="a">
            Home
          </NavLink>
          <NavLink to="/tunes" className="a">
            Tunes
          </NavLink>
          <NavLink to="/about" className="a">
            About
          </NavLink>
        </nav>
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
