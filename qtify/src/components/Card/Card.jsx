import React from "react";
import styles from "./Card.module.css";

const Card = ({ image, followers, title }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={image} alt="img" height="200px" width="100%" />
      </div>
      <div className={styles.follows_cont}>
        <button className={styles.follows_btn}>{followers} follows</button>
      </div>
      <div className={styles.text_cont}>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  );
};

export default Card;
