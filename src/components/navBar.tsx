import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <div><ul>
        <li>
          <NavLink to="/" end className="nav-link">Főoldal</NavLink>
        </li>
        <li>
          <NavLink to="/cars" className="nav-link">Autók</NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
}
