import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./ServicesBox.css";

const ServicesBox = () => {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    fetch("https://fast-sands-85552.herokuapp.com/places")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mb-5">This is our Services,,</h1>
      <div className="card-box">
        {cards.map((card) => (
          <Service key={card._id} card={card}></Service>
        ))}
      </div>
    </div>
  );
};

export default ServicesBox;
