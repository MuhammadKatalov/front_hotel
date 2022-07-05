import React from "react";
import styles from "./Payment.module.css";

const PaymentPage = () => {
  return (
    <div className={styles.payment__wrapper}>
      <div className={styles.main__content}>
        <div className={styles.pay__with}>Оплатить</div>
        <div className={styles.first__inputs__line}>
          <input
            className={styles.card__input}
            placeholder="Кредитная или дебетовая карта"
            type="card"
          />
        </div>
        <div className={styles.second__inputs__line}>
          <input
            className={styles.card__number}
            type="text"
            placeholder="Номер карты"
          />
        </div>
        <div className={styles.third__inputs__line}>
          <input
            className={styles.expiration__input}
            placeholder="Истечение"
            type="text"
          />
          <input className={styles.CCV__input} placeholder="CCV" type="text" />
        </div>
        <div className={styles.fourth__inputs__line}>
          <input
            className={styles.zip__code}
            placeholder="ZIP code"
            type="text"
          />
          <input
            className={styles.country__input}
            placeholder="Страна"
            type="text"
          />
        </div>
        <button className={styles.button__confirm}>Принять и оплатить</button>
      </div>
    </div>
  );
};

export default PaymentPage;
