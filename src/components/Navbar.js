import styles from "./Navbar.module.css"
import { NavLink } from "react-router-dom";
;


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" >
        <img src="./sadbacon.png" alt="" />
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? styles.active : '')}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : '')}>Sobre</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
