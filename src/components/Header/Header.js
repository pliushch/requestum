import React from "react";
import logo from "../../assets/images/logo.svg";
import styles from "./Header.scss";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img src={logo} alt="requestrum" />
      <div>
        <h2>requestum</h2>
        <h3>web development company</h3>
      </div>
    </div>
    <p className={styles.text}>Github users search app</p>
  </header>
);

export default Header;