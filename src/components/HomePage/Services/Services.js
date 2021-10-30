import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = (props) => {
  const { _id, name, description, img } = props.service;
  
  return (
    <div className="container">
      <div className="card-container">
        <img className="card-photo" src={img} alt="" />
        <div className="text-center text-white text-capitalize">
          <h2>{name}</h2>
          <p>{description.slice(0,250)}</p>
          <Link to={`/service/${_id}`}>
            <button className="btn btn-danger my-3">Booking</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
