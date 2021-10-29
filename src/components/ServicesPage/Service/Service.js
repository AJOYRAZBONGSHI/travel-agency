import React from 'react';
import './Service.css'

const Service = (props) => {
    const {img,name,price,duration,description}=props?.card;
    return (
      <div className="d-flex align-items-center justify-content-center mb-5">
        <div className="img-box me-4 ">
          <img className="box-cardImg rounded-3" src={img} alt="" />
        </div>
        <div>
          <h3>{name}</h3>
          <h4>Price : {price} $</h4>
          <h6>Duration : {duration}</h6>
          <p>{description}</p>
        </div>
      </div>
    );
};

export default Service;