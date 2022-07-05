import React from "react";
import styles from "./TheArea.module.css";
import derevo from "../../../imagesIcon/derevo.png";
import cartaphoto from "../../../imagesIcon/cartaphoto.png";
import restoran from "../../../imagesIcon/restoran.png";
import vodopad from "../../../imagesIcon/vodopad.png";
import doroga from "../../../imagesIcon/doroga.png";
import domiki from "../../../imagesIcon/domiki.png";
import icon from "../../../imagesIcon/icon.png";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapState = { center: [54.89693958318837, 11.239319927484164], zoom: 15 };

const TheArea = () => {
  return (
    <div className={styles.area__page}>
      <div className={styles.main__content__wrapper}>
        <div className={styles.area__wrapper}>
          <h1 className={styles.title__area}>Местность</h1>
        </div>
        <div className={styles.main__content}>
          <img className={styles.derevo} src={derevo} alt="" />
          <div className={styles.text__content}>
            <div className={styles.text__1}>Vesterborg</div>
            <div className={styles.text__2}>
              Помимо уюта и всех удобств, местоположение хижины предлагает вам
              окунуться во все красоты нашей природы...
            </div>
            <div className={styles.text__3}>
              У нас вы сможете насладиться свежим воздухом вдали от каменных
              джунглей, озерами, водопадом и многим другим чего нам так не
              хватает в повседневной жизни
            </div>
          </div>
        </div>
        <div className={styles.info__cart}>
          <div className={styles.text__info}>
            Мы находимся в 2 часах езды от Копенгагена
          </div>
          <img className={cartaphoto} src={cartaphoto} alt="" />
        </div>
        <hr className={styles.line}></hr>
        <div className={styles.info__block}>Так же вы сможете посетить...</div>
        <div className={styles.rest__shop}>
          <img className={styles.restoran} src={restoran} alt="" />
          <div className={styles.rest__text}>
            <div className={styles.rest__text1}>Рестораны и магазины</div>
            <div className={styles.rest__text2}>
              Мы находимся в небольшом городке Вестерборг, где помимо всего
              перечисленного, вы можете пройтись по крутым магазинам и
              попробовать вкусную Датскую кухню
            </div>
          </div>
        </div>
        <div className={styles.vodopad__info}>
          <div className={styles.vodopad__text}>
            Так же в наши услуги входит экскурсия с гидом по всей лесной
            территории с видом на один из самых больших водопадов Дании
          </div>
          <img className={styles.vodopad} src={vodopad} alt="" />
        </div>
        <div className={styles.doroga__info}>
          <img className={styles.doroga} src={doroga} alt="" />
          <div className={styles.doroga__text}>
            На фотографии вы можете наблюдать за невероятной красотой по пути к
            нам!
          </div>
        </div>
        <div className={styles.domiki__info}>
          <div className={styles.domiki__text}>
            Вид на нашу территорию с деревни, которая находится рядом с
            возвышением, откуда начинается путь к нашей хижине. Здесь вы так же
            можете устроить себе небольшую прогулку
          </div>
          <img className={styles.domiki} src={domiki} alt="" />
        </div>
        <div className={styles.map__wrapper}>
          <YMaps>
            <Map className={styles.map} state={mapState}>
              <Placemark
                className={styles.mark}
                geometry={[54.89693958318837, 11.239319927484164]}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: `${icon}`,
                  iconImageSize: [150, 150],
                  iconImageOffset: [-73, -80],
                }}
              />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
};

export default TheArea;
