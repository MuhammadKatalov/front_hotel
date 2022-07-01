import React, { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { fetchRoom } from "../../features/RoomSlice";
import { fetchRends, postRends } from "../../features/RendSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { fetchServices } from "../../features/ServicesSlice";

const RendCalendar = () => {
  const dispatch = useDispatch();
  const rends = useSelector(state => state.rends.rends);
  const room = useSelector(state => state.room.room);
  const services = useSelector(state => state.services.services);

  useEffect(() => {
    dispatch(fetchRoom())
    dispatch(fetchServices())
    dispatch(fetchRends())
  }, [dispatch])

  console.log(rends)

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
    dispatch(postRends({ registrationDate: checkInValue, releaseDate: checkOutValue , room: room._id, services: selectedServicess}))
  }

  const servicess = useSelector(state => state.rends.services)

  const [selectedServicess, setSelectedServicess] = useState([]);
 

const handleAddService = (id) => {
    // dispatch(postRends())
    setSelectedServicess([...selectedServicess, id]);
}
console.log(selectedServicess)
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
      {services.map((item) => {
        return (
          <div key={item._id} className="services">
            <div onClick={() => handleAddService(item._id)}  className="certain_service">{item.title} {item.price}</div>
          </div>
        );
       })}
      <button onClick={() => handleRend(checkInDate, checkOutDate)}>арендовать</button>
    </div>
  );
};

export default RendCalendar;
