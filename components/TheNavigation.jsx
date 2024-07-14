import { NavLink } from "react-router-dom";

function TheNavigation() {
  return (
    <nav className="navigation">
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
  );
}

export default TheNavigation;
