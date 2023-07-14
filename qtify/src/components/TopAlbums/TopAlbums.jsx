import React, { useEffect, useState } from "react";
import styles from "./TopAlbum.module.css";
import axios from "axios";
import Card from "../Card/Card";

function TopAlbums() {
  const [topAlbums, setTopAlbums] = useState([]);

  async function fetchTopAlbums() {
    try {
      let res = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      console.log(res);
      setTopAlbums(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTopAlbums();
  }, []);

  return (
    <>
      <div className={styles.top_albums_header}>
        <span>Top Albums</span>
        <span className={styles.collapse_text}>Collapse</span>
      </div>
      <div className={styles.top_album_cont}>
        {topAlbums.map((item) => {
          return <Card {...item} key={item.id} />;
        })}
      </div>
    </>
  );
}

export default TopAlbums;
