import { NavLink,Link  } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import logoStyle from "./Logo.module.css";

export default function SignNav() {
  return (
    <nav className={styles.signNav}>
     <Link to="/">
      <Logo className={logoStyle.logo} />
      </Link>
      <div>
        <span>
          <NavLink to="/Login">SignIn</NavLink>
        </span>
        <span>or</span>
        <span>
          <NavLink to="/">SignOut</NavLink>
        </span>
      </div>

    </nav>
  );
}
