import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "./room.module.css";
import breakfast from "../../../imagesIcon/denmarksBreakfast.png";
import { Rating } from "@mui/material";
import {
  fetchRoom,
  fetchReviews,
  postReview,
  deleteReviews,
} from "../../../features/RoomSlice";

const Room = () => {
  const room = useSelector((state) => state.room.room);
  const reviews = useSelector((state) => state.room.reviews);
  const user = useSelector((state) => state.auth.id);

  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoom());
    dispatch(fetchReviews());
  }, [dispatch]);

  const handleChangeReview = (e) => {
    setReview(e.target.value);
  };

  const handleDeleteReview = (id) => {
    dispatch(deleteReviews(id));
  };

  const handleSubmit = () => {
    dispatch(postReview({ review }));
    dispatch(fetchReviews());
    setReview("");
  };

  if (!room) {
    return "...загрузка";
  }

  return (
    <div className={styles.room__wrapper}>
      <div className={styles.mainImg__inner}>
        <div className={styles.hut__inner}>
          <span className={styles.theHut}>Хижина</span>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.first__info__block}>
          <div className={styles.firstImg__inner}>
            <img src={room.images[1]} />
          </div>
          <div className={styles.firstBlock__info}>
            <p className={styles.firstBlock__paragraf}>Хижина снаружи</p>
            <div className={styles.outside__info}>
              Три эксклюзивные и комфортабельные каюты Løvtag - Et, Ro и Ly -
              спроектированы архитектором Сигурдом Ларсеном. Во всех номерах
              есть открытое пространство с двуспальной кроватью, двуспальным
              диваном-кроватью, кухней, отдельным туалетом и душем на открытом
              воздухе. На крыше, окруженной верхушками деревьев, есть терраса,
              которая находится примерно в девяти метрах над землей.
            </div>
          </div>
        </div>
        <div className={styles.second__info__block}>
          <div className={styles.secondBlock__info}>
            <p className={styles.secondBlock__paragraf}>Хижина внутри</p>
            <div className={styles.outside__info}>
              Три эксклюзивные и комфортабельные каюты Løvtag - Et, Ro и Ly -
              спроектированы архитектором Сигурдом Ларсеном. Во всех номерах
              есть открытое пространство с двуспальной кроватью, двуспальным
              диваном-кроватью, кухней, отдельным туалетом и душем на открытом
              воздухе. На крыше, окруженной верхушками деревьев, есть терраса,
              которая находится примерно в девяти метрах над землей.
            </div>
          </div>
          <div className={styles.secondImg__inner}>
            <img src={room.images[0]} />
          </div>
        </div>
        <div className={styles.third__info__block}>
          <div className={styles.thirdImg__inner}>
            <img src={breakfast} />
          </div>
          <div className={styles.thirdBlock__info}>
            <p className={styles.thirdBlock__paragraf}>Практические аспекты</p>
            <div className={styles.outside__info}>
              Три эксклюзивные и комфортабельные каюты Løvtag - Et, Ro и Ly -
              спроектированы архитектором Сигурдом Ларсеном. Во всех номерах
              есть открытое пространство с двуспальной кроватью, двуспальным
              диваном-кроватью, кухней, отдельным туалетом и душем на открытом
              воздухе. На крыше, окруженной верхушками деревьев, есть терраса,
              которая находится примерно в девяти метрах над землей.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.review__review}>Отзывы</div>
      <div className={styles.review__inner}>
        <div className={styles.review__wrapper}>
          <input
            className={styles.review__input}
            type="text"
            value={review}
            onChange={(e) => handleChangeReview(e)}
          />
          <button className={styles.reviewBtn} disabled={!review.trim()} onClick={handleSubmit}>
            Добавить
          </button>
        </div>
        {reviews.map((items) => {
          return (
            <div key={items._id} className={styles.main}>
              <div className={styles.user__review}>
                <div
                  className={styles.itemsId}
                >{`${items.user?.firstName} ${items.user?.lastName[0]}.`}</div>
                <Rating
                  className={styles.rating}
                  size="large"
                  name="read-only"
                  value={rating}
                  readOnly
                />
              </div>
              <div className={styles.reviewText__wrapper}>
                <div>{items.text}</div>
                <button
                  onClick={() => handleDeleteReview(items._id)}
                  className={`${styles.deleteRevBtn} ${
                    user !== items.user._id ? `${styles.fal}` : ""
                  }`}
                  disabled={user !== items.user._id}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Room;
