import React from "react";
import heroImg from "../../assests/hero-img.png";
import styles from "./Herosection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.text_content}>
        <h1>
          100 Thousand Songs, ad-free
          <br />
          Over thousands podcast episodes
        </h1>
      </div>
      <div>
        <img src={heroImg} alt="Hero" width="200px" />
      </div>
    </section>
  );
};

export default HeroSection;
