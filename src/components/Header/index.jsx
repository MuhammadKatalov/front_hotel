import React from "react";
import styles from "./header.module.css";
import icons1 from "../../imagesIcon/icons1.png";
import denmark from "../../imagesIcon/denmark.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.head}>
      <div className={styles.header__wrapper}>
        <div className={styles.image__inner}>
          <img className={styles.icons1} src={icons1} alt=""></img>
        </div>
        <div className={styles.navbar}>
          <Link to={"/"}>
            <div className={styles.home}>Главная</div>
          </Link>
          <Link to={"/room"}>
            <div>Хижина</div>
          </Link>
          <Link to={"/thearea"}>
            <div>Местоположение</div>
          </Link>
          <Link to={"/rend"}>
            <div>Бронирование</div>
          </Link>
          <Link to={"/signup"}>
            <div>Зарегистрироваться</div>
          </Link>
          <Link to={"/signin"}>
            <div>Войти</div>
          </Link>

          <Link to={"aboutus"}>
            <div>
              {" "}
              <a href="tel:89380150313">О нас</a> О нас
            </div>
          </Link>
          <img className={styles.denmark} src={denmark} alt=""></img>
        </div>
        <Link to={"/rend"}>
          <button className={styles.button__bron}>ЗАБРОНИРОВАТЬ</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
