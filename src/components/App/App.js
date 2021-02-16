import React from "react";
import Header from "../Header/Header";
import styles from "./App.scss";
import Search from "../Search/Search";
import UserList from "../UserList/UserList";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <div className={styles.block}>
          <Search />
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default App;
