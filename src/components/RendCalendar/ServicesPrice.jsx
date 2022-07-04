import React from "react";
import styles from "./RendCalendar.module.css";

const ServicesPrice = ({ rend }) => {
  return (
    <div>
      {rend.service.map((servic) => {
        return (
          <div key={servic._id} className={styles.certain_service}>
            <div className={styles.servicess}>
              <div className={styles.servic_title}>{servic.title}</div>
              <div className={styles.service_price}>{servic.price}₽</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesPrice;
