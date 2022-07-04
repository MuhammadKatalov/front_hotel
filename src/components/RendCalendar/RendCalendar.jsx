import React, { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { fetchRoom } from "../../features/RoomSlice";
import { fetchRends, postRends } from "../../features/RendSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { fetchServices } from "../../features/ServicesSlice";
import ResultCheck from "./ResultCheck";
import styles from "./RendCalendar.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import photo from "../../imagesIcon/Vector.png";

const RendCalendar = () => {
  const dispatch = useDispatch();

  const rends = useSelector((state) => state.rends.rends);
  const room = useSelector((state) => state.room.room);
  const services = useSelector((state) => state.services.services);

  useEffect(() => {
    dispatch(fetchRoom());
    dispatch(fetchServices());
    dispatch(fetchRends());
  }, [dispatch]);

  const [dateRange, setDateRange] = useState([0, 0]);
  const [checkIn, checkOut] = dateRange;
  const [add, setAdd] = useState(false);

  const checkInDate = new Date(checkIn);

  const checkInMonth = checkInDate.getUTCMonth() + 1;
  const checkInDay = checkInDate.getUTCDate() + 1;
  const checkInYear = checkInDate.getUTCFullYear();

  const checkOutDate = new Date(checkOut);

  const checkOutMonth = checkOutDate.getUTCMonth() + 1;
  const checkOutDay = checkOutDate.getUTCDate() + 1;
  const checkOutYear = checkOutDate.getUTCFullYear();

  const checkInValue = checkInYear + "-" + checkInMonth + "-" + checkInDay;
  const checkOutValue = checkOutYear + "-" + checkOutMonth + "-" + checkOutDay;

  const [selectedServicess, setSelectedServicess] = useState([]);
  console.log(selectedServicess);
  const getRends = () => {
    dispatch(fetchRends());
  };

  const handleRend = () => {
    dispatch(
      postRends({
        registrationDate: checkInValue,
        releaseDate: checkOutValue,
        room: room._id,
        services: selectedServicess,
        callback: getRends,
      })
    );
  };

  // const checked = selectedServicess.includes(id);

  const handleAddService = (id) => {
    setSelectedServicess([...selectedServicess, id]);
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.photo_text}>
        <h1 className={styles.booking}>Аренда</h1>
        <div className={styles.vests}>
          <div className={styles.vest}>
            <img src={photo} alt="" />
          </div>
          <div className={styles.vestborg}>Вестерборг, Дания</div>
        </div>
      </div>
      <div className={styles.datePicker}>
        <DatePicker
          selectsRange={true}
          startDate={checkIn}
          endDate={checkOut}
          minDate={new Date()}
          inline
          onChange={(update) => {
            setDateRange(update);
          }}
          isClearable={false}
        />
      </div>
      {services.map((item) => {
        return (
          <div key={item._id} className={styles.services}>
            <div
              onClick={() => handleAddService(item._id)}
              className={styles.certain_service}
            >
              <div className={styles.service_all}>
                <div className={styles.service_all_title}>
                  <div className={styles.corcle_item}>
                    <div className={styles.circle}>
                      <span>
                        {!selectedServicess.includes(item._id) ? (
                          <AiOutlinePlus />
                        ) : (
                          <AiOutlineCheck />
                        )}
                      </span>
                    </div>
                    <div className={styles.serv_title}>{item.title}</div>
                  </div>
                  <div className={styles.service_all_price}>{item.price}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <button onClick={() => handleRend(checkInDate, checkOutDate)}>
        арендовать
      </button>
      {rends && <ResultCheck rends={rends} />}
    </div>
  );
};

export default RendCalendar;
