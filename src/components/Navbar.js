import styles from "./Navbar.module.css"
import { NavLink } from "react-router-dom";
;


function Navbar() {
  return (
    <div>
      <NavLink to="/">
        <img src="./sadbacon.png" alt="" />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
