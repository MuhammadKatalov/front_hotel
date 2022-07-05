import { YMaps, Map, Placemark } from "react-yandex-maps";
import icon from "../../../../imagesIcon/icon.png";
import styles from "./Map.module.css";

const mapState = { center: [54.89693958318837, 11.239319927484164], zoom: 15 };

const MapComponent = () => {
  return (
    <div className={styles.App}>
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
      <div className={styles.forest__block}>
        <div className={styles.textContent}>
          <p className={styles.textParagraf}>Лес</p>
          <div className={styles.textBlock}>
            Три эксклюзивные и комфортабельные каюты Løvtag - Et, Ro и Ly -
            спроектированы архитектором Сигурдом Ларсеном. Во всех номерах есть
            открытое пространство с двуспальной кроватью, двуспальным
            диваном-кроватью, кухней, отдельным туалетом и душем на открытом
            воздухе. На крыше, окруженной верхушками деревьев, есть терраса,
            которая находится примерно в девяти метрах над землей. Коттеджи
            построены вокруг высоких старых деревьев, которые пронизывают весь
            коттедж от пола до потолка.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
