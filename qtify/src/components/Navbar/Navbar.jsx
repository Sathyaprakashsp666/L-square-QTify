import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import qtifyLogo from "../../assests/qtify-logo.png";
import Search from "../Search/Search";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Logo logo={qtifyLogo} />
      <Search />
      <Button>Give Feedback</Button>
    </nav>
  );
};

export default Navbar;
