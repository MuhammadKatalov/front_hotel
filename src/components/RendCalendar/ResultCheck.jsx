import React from "react";
import ServicesPrice from "./ServicesPrice";

const ResultCheck = ({ rends }) => {
  const sum = 74000;

  const sumPrice = (rend) => {
    let money = 0;
    rend.service.map((servic) => (money += servic.price));
    return money;
  };

  return (
    <div>
      {rends.map((rend) => {
        return (
          <div key={rend._id}>
            <div className="hotel_name">The gluss hut</div>
            <div className="dates">
              <div className="registr_date">
                Дата заселения {rend.registrationDate}
              </div>
              <div className="releaseDate">Дата выезда {rend.releaseDate}</div>
              <div className="room_price">18500 * 4 nigths {sum}</div>
            </div>
            <ServicesPrice rend={rend}/>
            <div>Total {sumPrice(rend) + sum}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ResultCheck;
