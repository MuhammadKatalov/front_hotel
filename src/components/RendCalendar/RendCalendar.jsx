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

  console.log(rends);

  const [dateRange, setDateRange] = useState([0, 0]);
  const [checkIn, checkOut] = dateRange;

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
  console.log(rends);
  const getRends = () => {
    dispatch(fetchRends());
  };
  console.log(checkInValue);
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

  const handleAddService = (id) => {
    setSelectedServicess([...selectedServicess, id]);
  };

  return (
    <div className={styles.calendar}>
      <DatePicker
        selectsRange={true}
        startDate={checkIn}
        endDate={checkOut}
        minDate={new Date()}
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable={false}
      />
      {services.map((item) => {
        return (
          <div key={item._id} className={styles.services}>
            <div
              onClick={() => handleAddService(item._id)}
              className="certain_service"
            >
              {item.title} {item.price}
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
