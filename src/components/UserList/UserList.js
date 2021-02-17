import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import styles from "./UserList.scss";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";

const UserList = () => {
  const { loading, data, error } = useSelector((state) => state.userInfo);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className={styles.error}>Sorry! We can't find this nickname</div>
    );
  }

  return (
    <div className={styles.container}>
      {data.map(({ name, description, language, id }) => (
        <UserInfo
          key={id}
          name={name}
          description={description}
          language={language}
        />
      ))}
    </div>
  );
};

export default UserList;
