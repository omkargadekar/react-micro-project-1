import React from "react";
import "./grad.css";

const Gradient = ({
  cardHolderName,
  cardNum,
  cardMonth,
  cardYear,
  cardCvv,
  submitted,
}) => {
  return (
    <div className="grad">
      <div className="card1">
        <div className="circle">
          <div className="circleposition">
            <p className="circle1"></p>
            <span className="circle2"></span>
          </div>
          <div>
            <span className="circle3"></span>
            <span className="circle4"></span>
          </div>
        </div>
        <div className="info">
          <h1>{submitted ? cardNum : "0000 0000 0000 0000"}</h1>
          <div className="date">
            <p>{submitted ? cardHolderName : "Jane Appleseed"}</p>
            <p>{submitted ? `${cardMonth}/${cardYear}` : "00/00"}</p>
          </div>
        </div>
      </div>
      <div className="card2">
        <div className="black"></div>
        <div className="cvv">
          <p>{submitted ? cardCvv : "000"}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Gradient;
