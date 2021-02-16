import React, { useState } from "react";
import styles from "./Search.scss";

const Search = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  const handleClick = (item) => setValue(item);

  const items = ["tom", "mot", "new"];
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={handleChange}
      />
      <p className={styles.text}>Search history:</p>
      {items.map((item) => {
        return (
          <p
            className={styles.value}
            key={item}
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
