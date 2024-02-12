import { NavLink,Link  } from "react-router-dom";
import styles from "./PageNav.module.css";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/News">News</NavLink>
        </li>
        <li>
          <NavLink to="/Courses">Courses</NavLink>
        </li>
        <li>
          <NavLink to="/ebooks">E-books</NavLink>
        </li>
        <li>
          <NavLink to="/ContactUs">ContactUs</NavLink>
        </li>
      </ul>
      <Link to="/">
      <span className={styles.cart}>Cart</span>
      </Link>
    </nav>
  );
}
