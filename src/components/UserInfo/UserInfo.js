import React from "react";
import styles from "./UserInfo.scss";

const UserInfo = ({title, language, description}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.language}>
        Language: <span>{language}</span>
      </p>
      <p>
        Description: <span>{description}</span>
      </p>
    </div>
  );
};

export default UserInfo;
