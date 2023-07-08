import React from "react";
import searchIcon from "../../assests/search-icon.png";
import styles from "./Search.module.css";
const Search = () => {
  return (
    <form className={styles.wrapper}>
      <input
        className={styles.search}
        type="search"
        placeholder="Search a album of your choice"
      />
      <button className={styles.searchBtn}>
        <img src={searchIcon} alt="search" />
      </button>
    </form>
  );
};

export default Search;
