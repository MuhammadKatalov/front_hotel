import React from "react";
import styles from "./header.module.css";
import icons1 from "../../imagesIcon/icons1.png";
import denmark from "../../imagesIcon/denmark.png";

const Header = () => {
  return (
    <header className={styles.head}>
      <div className={styles.header__wrapper}>
        <div className={styles.image__inner}>
          <img className={styles.icons1} src={icons1} alt=""></img>
        </div>
        <div className={styles.navbar}>
          <div className={styles.home}>Главная</div>
          <div>Хижина</div>
          <div>Местоположение</div>
          <div>Бронирование</div>
          
          <a href="tel:+79889075674"><div>О нас</div></a>
          <img className={styles.denmark} src={denmark} alt=""></img>
        </div>
        <button className={styles.button__bron}>ЗАБРОНИРОВАТЬ</button>
      </div>
    </header>
  );
};

export default Header;
