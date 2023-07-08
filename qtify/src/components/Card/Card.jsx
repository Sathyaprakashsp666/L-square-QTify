import React from "react";
import styles from "./Card.module.css";

const Card = ({ img, followers, title }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={img} alt="img" height="200px" width="100%" />
      </div>
      <div className={styles.follows_cont}>
        <button className={styles.follows_btn}>{followers} follows</button>
      </div>
      <div className={styles.text_cont}>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default Card;
