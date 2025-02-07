import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar(): JSX.Element {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.listElement}>
          <NavLink to="/Carshop" className={styles.link}> Carshop</NavLink>
        </li>
        <li className={styles.listElement}>
          <NavLink to="/ProducktDescription" className={styles.link}>ProducktDescription</NavLink>
        </li>
        <li className={styles.listElement}>
          <NavLink to="/Counter" className={styles.link}>Counter</NavLink>
        </li>
        <li className={styles.listElement}>
          <NavLink to="/UserPage" className={styles.link}>UserPage</NavLink>
        </li>
        <li className={styles.listElement}>
          <NavLink to="/FetchChuckNorris" className={styles.link}>FetchChuckNorris</NavLink>
        </li>
        <li className={styles.listElement}>
          <NavLink to="/IpLocation" className={styles.link}> IpLocation</NavLink>
        </li>
        <li className={styles.listElement}>
          <NavLink to="/Coctail" className={styles.link}> Coctail</NavLink>
        </li>
        <li className={styles.listElement}>
          <NavLink to="/Playground" className={styles.link}> Playground</NavLink>
        </li>
        
      </ul>
    </nav>
  );
}
