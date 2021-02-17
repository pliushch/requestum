import React, { useEffect } from "react";
import styles from "./Search.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo, setTerm } from "../../store/userInfo/action";

const Search = () => {
  const dispatch = useDispatch();
  const { term, searchList } = useSelector((state) => state.userInfo);

  const handleChange = (e) => dispatch(setTerm(e.target.value));
  const handleClick = (item) => dispatch(setTerm(item));

  useEffect(() => {
    let waiting = false;
    setTimeout(() => {
      !waiting && term && dispatch(fetchUserInfo(term));
    }, 1000);

    return () => (waiting = true);
  }, [term]);

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type="text"
        value={term}
        onChange={handleChange}
      />
      <p className={styles.text}>Search history:</p>
      {searchList
        .slice(-5)
        .reverse()
        .map((item, i) => {
          return (
            <p
              className={styles.value}
              key={item + i}
              onClick={() => handleClick(item)}
            >
              {item}
            </p>
          );
        })}
    </div>
  );
};

export default Search;
