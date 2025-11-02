import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/" end className="nav-link">Főoldal</NavLink>
      <NavLink to="/cars" className="nav-link">Autók</NavLink>
    </nav>
  );
}
