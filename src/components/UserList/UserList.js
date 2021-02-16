import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import styles from './UserList.scss'

const UserList = () => {
  const data = [
    {
      title: "Some Lorem",
      language: "JavaScript",
      description: "lorem lorem 123",
      id: 1,
    },
    {
      title: "Another lorem",
      language: "Scala",
      description: "i don't know",
      id: 2,
    },
    {
      title: "Some Lorem",
      language: "JavaScript",
      description: "lorem lorem 123",
      id: 3,
    },
    {
      title: "Another lorem",
      language: "Scala",
      description: "i don't know i don't know i don't know i don't know i don't know i don't know i don't know i don't know i don't know i don't know",
      id: 4,
    },
    {
      title: "Some Lorem",
      language: "JavaScript",
      description: "lorem lorem 123",
      id: 5,
    },
  ];

  return (
    <div className={styles.container}>
      {data.map((userInfo) => {
        return (
          <UserInfo
            title={userInfo.title}
            description={userInfo.description}
            language={userInfo.language}
            key={userInfo.id}
          />
        );
      })}
    </div>
  );
};

export default UserList;
