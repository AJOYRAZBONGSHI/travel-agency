import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = (props) => {
  const { id, name, price, img } = props.service;
  return (
    <div className="container">
      <div className="card-container">
        <img className="card-photo" src={img} alt="" />
        <div className="text-center text-white text-capitalize">
          <h2>{name}</h2>
          <h4>{price}</h4>
          <Link to={`/service/${id}`}>
            <button className="btn btn-danger my-3">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
