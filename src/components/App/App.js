import React from "react";
import Header from "../Header/Header";
import styles from './App.scss'
import Search from "../Search/Search";

const App = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      <Header />
      <Search />
    </div>
    </div>
  );
};

export default App;
