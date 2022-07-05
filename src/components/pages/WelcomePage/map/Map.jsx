import {
  YMaps,
  Map,
  Placemark
} from "react-yandex-maps";
import icon from "../../../imagesIcon/icon.png";
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
      <div className={styles.forest__block}></div>
    </div>
  );
};

export default MapComponent;
