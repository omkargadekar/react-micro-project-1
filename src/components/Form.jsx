import React, { useState } from "react";
import "./form.css";
import Gradient from "./Gradient";

const Form = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    num: "",
    month: "",
    year: "",
    cvv: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const newErrors = {
      name: !/^[A-Za-z\s]+$/.test(name)
        ? "Cardholder name should contain only letters"
        : "",
      num: !/^\d{16}$/.test(num) ? "Card number should contain 16 digits" : "",
      month:
        isNaN(month) || month < 1 || month > 12
          ? "Enter a valid month (1-12)"
          : "",
      year: !/^\d{4}$/.test(year) ? "Enter a valid year (4 digits)" : "",
      cvv: !/^\d{3}$/.test(cvv) ? "Enter a valid 3-digit CVC" : "",
    };

    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (hasErrors) {
      setErrors(newErrors);
    } else {
      setErrors({
        name: "",
        num: "",
        month: "",
        year: "",
        cvv: "",
      });
      setSubmitted(true);
    }
  };

  return (
    <>
      <Gradient
        cardHolderName={name}
        cardNum={num}
        cardMonth={month}
        cardYear={year}
        cardCvv={cvv}
        submitted={submitted}
      />

      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="cardname">
            <label htmlFor="name">CARDHOLDER NAME</label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="e.g. Jane Appleseed"
              value={name}
            />
            {errors.name && <label className="warning">{errors.name}</label>}
          </div>

          <div className="cardname">
            <label htmlFor="name">CARD NUMBER</label>
            <input
              onChange={(e) => {
                setNum(e.target.value);
              }}
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              value={num}
            />
            {errors.num && <label className="warning">{errors.num}</label>}
          </div>

          <div className="exp">
            <div className="exp-date">
              <label htmlFor="name">EXP.DATE (MM/YY)</label>
              <div className="exp-input">
                <input
                  onChange={(e) => {
                    setMonth(parseInt(e.target.value, 10));
                  }}
                  type="number"
                  placeholder="MM"
                  min="1"
                  max="12"
                  value={month || ""}
                />
                <input
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                  type="number"
                  placeholder="YY"
                  value={year}
                />
              </div>
              {errors.month && (
                <label className="warning">{errors.month}</label>
              )}
            </div>
            {/* CVV */}
            <div className="exp-cvv">
              <label htmlFor="name">CVC</label>
              <input
                onChange={(e) => {
                  setCvv(e.target.value);
                }}
                type="number"
                placeholder="e.g. 123"
                value={cvv}
              />
              {errors.cvv && <label className="warning">{errors.cvv}</label>}
            </div>
          </div>
          <div className="btn">
            <button>confirm</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
