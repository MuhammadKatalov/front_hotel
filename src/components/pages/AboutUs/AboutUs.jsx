import React from "react";
import styles from "./AboutUs.module.css";
import nate from "../../../imagesIcon/nate.png";
import cartinka from "../../../imagesIcon/cartinka.png";
import gora from "../../../imagesIcon/gora.png";
import photodev from "../../../imagesIcon/photodev.png";
import photoulica from "../../../imagesIcon/photoulica.png";
import iconlove from "../../../imagesIcon/iconlove.png";

const AboutUs = () => {
  return (
    <div className={styles.about__page}>
      <div className={styles.about_us}>
        <h1 className={styles.title_about}>О нас</h1>{" "}
      </div>
      <div className={styles.main__content}>
        <img className={styles.nate} src={nate} alt="" />
        <div className={styles.text__content}>
          <div className={styles.text__1}>
            «Хижина» создана с любовью к деталям. Каждая малейшая деталь и его
            наполнение созданы руками нашей команды.
          </div>
          <div className={styles.text__2}>
            Мы создали для вас совершенный уровень отдыха в укромном уголке
            нашей природы. Проект «Хижина» станет вашим местом абсолютного
            спокойствия и размеренности, уединения и безопасности. Здесь вы
            сможете насладиться по-настоящему сказочной красотой родной природы
            в атмосфере продуманного комфорта. Вас ждут незабываемые
            впечатления, которые вдохнут в вас свежие силы для новых свершений.
          </div>
        </div>
      </div>
      <div className={styles.text__obs}>
        <hr className={styles.line}></hr>
        <div className={styles.text__3}>
          Сила. Аутентичность. Подлинность во всём.
        </div>
      </div>
      <div className={styles.images__photo}>
        <div className={styles.images__1}>
          <img className={styles.cartinka} src={cartinka} alt="" />
          <img className={styles.gora} src={gora} alt="" />
        </div>
        <div className={styles.images__2}>
          <img className={styles.photodev} src={photodev} alt="" />
          <div className={styles.back__text}>
            Принять душ. Сделать глоток кофе с утра. Отправиться на прогулку в
            лес. Погреть руки у костра. Крепко обнять своих близких. Всё
            остальное мы взяли на себя
          </div>
          <img className={styles.photoulica} src={photoulica} alt="" />
        </div>
      </div>
      <div className={styles.foot__block}>
        <div className={styles.title}>From Denmark, With love...</div>
        <img className={styles.iconlove} src={iconlove} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
