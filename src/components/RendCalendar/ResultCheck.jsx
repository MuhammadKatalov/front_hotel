import React, { useState } from "react";
import ServicesPrice from "./ServicesPrice";
import styles from "./RendCalendar.module.css";

const ResultCheck = ({ rends, onCheck }) => {
  const sum = 74000;

  const sumPrice = (rend) => {
    let money = 0;
    rend.service.map((servic) => (money += servic.price));
    return money;
  };

  const [book, setBook] = useState(false)

  const handleBook = () => {
    setBook(!book)
    onCheck()
  }

  console.log(rends);
  return (
    <div>
      {rends.map((rend) => {
        return (
          <div className={styles.container_check} key={rend._id}>
            <div className={styles.check_container}>
              <div className={styles.night_sum}>
                <div className={styles.sum}>18500₽</div>
                <div className={styles.nigth}>/ ночь</div>
              </div>
              <div className={styles.dates}>
                <div className={styles.datas}>
                  <div className={styles.registr_date}>
                    <div className={styles.reg_date}>Дата заселения</div>
                    <div> {rend.registrationDate}</div>
                  </div>
                  <div className={styles.releaseDate}>
                    <div className={styles.rel_date}>Дата выезда</div>
                    <div className={styles.date_rel}>{rend.releaseDate}</div>
                  </div>
                </div>
                <div className={book ? styles.book_green : styles.book} onClick={handleBook}>Арендовать</div>
                <div className={styles.nights}>
                <div className={styles.room_price}>18500 * 6 nigths</div>
                <div className={styles.price_room}>{sum}₽</div>
                </div>
                <ServicesPrice rend={rend} />
                <div className={styles.bord}></div>
                <div className={styles.total}>
                  <div className="total_tot">Общая сумма</div>
                  <div className="total_sum">{sumPrice(rend) + sum}₽</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResultCheck;
