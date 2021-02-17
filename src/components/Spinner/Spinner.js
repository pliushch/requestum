import React from "react";
import styles from "./Spinner.scss";

const Spinner = () => (
  <div className={styles.container}>
    <div className={styles.ldsRing}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Spinner;
