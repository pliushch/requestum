import React from "react";
import PropTypes from "prop-types";
import styles from "./UserInfo.scss";

const UserInfo = ({ name, language, description }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{name}</h2>
    <p className={styles.language}>
      Language: <span>{language}</span>
    </p>
    <p>
      Description: <span>{description}</span>
    </p>
  </div>
);

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.string,
  description: PropTypes.string,
};

export default UserInfo;
