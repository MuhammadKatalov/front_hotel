import React from "react";
import TheCabins from "../../../imagesIcon/TheCabins.png";
import firstImage from "../../../imagesIcon/firstImage.png";
import secondImage from "../../../imagesIcon/secondImage.png";
import thirdImage from "../../../imagesIcon/thirdImage.png";
import fridge1 from "../../../imagesIcon/fridge1.png";
import kitchen from "../../../imagesIcon/kitchen1.png";
import coffee from "../../../imagesIcon/coffee.png";
import eletricTea from "../../../imagesIcon/electricTea.png";
import parking from "../../../imagesIcon/park 1.png";
import trees from "../../../imagesIcon/trees 1.png";
import floor from "../../../imagesIcon/temperature 1.png";
import plug from "../../../imagesIcon/plug 1.png";
import wifi from "../../../imagesIcon/wifi 1.png";
import shower from "../../../imagesIcon/shower 1.png";
import toilets from "../../../imagesIcon/toilet 1.png";
import towels from "../../../imagesIcon/towels 1.png";
import styles from "./Welcome.module.css";
import MapComponent from "./map/Map";

const Welcome = () => {
  return (
    <div className={styles.welcome__page}>
      <div className={styles.mainImg}>
        <div className={styles.findPeace__forest}>Найди покой в лесу</div>
        <p className={styles.findPeace__paragraf}>
          Приезжайте и остановитесь в отеле OutHut недалеко от Мариагер-фьорда в
          Дании
        </p>
      </div>
      <div className={styles.main__content}>
        <div className={styles.first__info__block}>
          <div className={styles.firstBlock__info}>
            <p className={styles.firstBlock__paragraf}>Кабинки</p>
            <div className={styles.outside__info}>
              Три эксклюзивные и комфортабельные каюты Løvtag - Et, Ro и Ly -
              спроектированы архитектором Сигурдом Ларсеном. Во всех номерах
              есть открытое пространство с двуспальной кроватью, двуспальным
              диваном-кроватью, кухней, отдельным туалетом и душем на открытом
              воздухе. На крыше, окруженной верхушками деревьев, есть терраса,
              которая находится примерно в девяти метрах над землей. Коттеджи
              построены вокруг высоких старых деревьев, которые пронизывают весь
              коттедж от пола до потолка.
            </div>
          </div>
          <div className={styles.firstImg__inner}>
            <img src={TheCabins} />
          </div>
        </div>
        <div className={styles.images__block}>
          <img src={firstImage} />
          <img src={secondImage} />
          <img src={thirdImage} />
        </div>
        <div className={styles.map__inner}>
          <MapComponent />
        </div>
        <div className={styles.facilities}>
          <div className={styles.facilities__paragraf}>Услуги</div>
          <div className={styles.check__facilities}>
            <div className={styles.facilities__items}>
              <div className={styles.facilities__firstBlock}>
                <img src={fridge1} alt="" />
                <img src={kitchen} alt="" />
                <img src={coffee} alt="" />
                <img src={eletricTea} alt="" />
              </div>
              <div className={styles.facilities__secondBlock}>
                <img src={parking} alt="" />
                <img src={trees} alt="" />
                <img src={floor} alt="" />
                <img src={plug} alt="" />
              </div>
              <div className={styles.facilities__thirdBlock}>
                <img src={wifi} alt="" />
                <img src={shower} alt="" />
                <img src={toilets} alt="" />
                <img src={towels} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lastImages}>
          <div className={styles.lastImage1}></div>
          <div className={styles.lastImage2}></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
