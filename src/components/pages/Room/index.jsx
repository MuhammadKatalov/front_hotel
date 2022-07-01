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

  if (!room.length) {
    return "...загрузка";
  }

  return (
    <>
      <div>описание что на улице --- {room[0].outside}</div>
      <div>описание что внутри --- {room[0].inside}</div>
      <div>цена аренды на сутки --- {room[0].price}</div>
      <div>количество комнат в хижине --- {room[0].roomsCounter}</div>
      <div>максимум человек --- {room[0].numberPerson}</div>
      <div>
        <img src={room[0].images[0]} />
        <img src={room[0].images[1]} />
      </div>
      <button>Арендовать</button>
    </>
  );
};

export default Room;
