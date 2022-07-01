import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoom } from "../../../features/RoomSlice";

const Room = () => {
  const room = useSelector((state) => state.room.room);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoom())
  }, [dispatch]);

  if (!room) {
    return "...загрузка";
  }

  return (
    <>
      <div>описание что на улице --- {room.outside}</div>
      <div>описание что внутри --- {room.inside}</div>
      <div>цена аренды на сутки --- {room.price}</div>
      <div>количество комнат в хижине --- {room.roomsCounter}</div>
      <div>максимум человек --- {room.numberPerson}</div>
      <div>
        <img src={room.images[0]} />
        <img src={room.images[1]} />
      </div>
      <button>Арендовать</button>
    </>
  );
};

export default Room;
