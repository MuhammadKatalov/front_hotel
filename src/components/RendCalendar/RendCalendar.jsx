import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { postRends } from "../../features/RendSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";

const RendCalendar = () => {
  const dispatch = useDispatch();
  const rends = useSelector(state => state.rends)
console.log(rends);
  const [dateRange, setDateRange] = useState([null, null]);
  const [checkIn, checkOut] = dateRange;

  const checkInDate = new Date(checkIn);

  const checkInMonth = checkInDate.getUTCMonth() + 1;
  const checkInDay = checkInDate.getUTCDate();
  const checkInYear = checkInDate.getUTCFullYear();

  const checkOutDate = new Date(checkOut);

  const checkOutMonth = checkOutDate.getUTCMonth() + 1;
  const checkOutDay = checkOutDate.getUTCMonth();
  const checkOutYear = checkOutDate.getUTCFullYear();
  
  const checkInValue = checkInYear + "-" + checkInMonth + "-" + checkInDay;
  const checkOutValue = checkOutYear + "-" + checkOutMonth + "-" + checkOutDay;

  const handleRend = () => {
    dispatch(postRends({ registrationDate: checkInValue, releaseDate: checkOutValue }))
  }

  return (
    <div className="calendar">
      <DatePicker
        selectsRange={true}
        startDate={checkIn}
        endDate={checkOut}
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable={false}
      />
      <button onClick={() => handleRend(checkInDate, checkOutDate)}>арендовать</button>
    </div>
  );
};

export default RendCalendar;
