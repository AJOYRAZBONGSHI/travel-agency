import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./ServicesBox.css";

const ServicesBox = () => {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mb-5">This is our Services,,</h1>
      <div className="card-box">
        {cards.map((card) => (
          <Service key={card.id} card={card}></Service>
        ))}
      </div>
    </div>
  );
};

export default ServicesBox;
