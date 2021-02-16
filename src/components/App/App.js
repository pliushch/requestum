import React, {useEffect} from "react";
import Header from "../Header/Header";
import styles from "./App.scss";
import Search from "../Search/Search";
import UserList from "../UserList/UserList";
import { useDispatch } from "react-redux";
import { fetchGists } from "../../store/getDistsInfo/reducer";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGists)
  }, [])

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
