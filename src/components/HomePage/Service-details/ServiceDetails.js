import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const [blogs, setBlog] = useState([]);

  const { serviceId } = useParams();

  useEffect(() => {
    const url = `https://fast-sands-85552.herokuapp.com/places/${serviceId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  const removePlace = (e) => {
    setBlog([]);
  };

  return (
    <div className="blogs-container">
      <h1>You are selected :</h1>
      <div className="place w-75 mx-auto d-flex p-3 align-items-center">
        <h3 className="text-success me-3">{blogs.name} </h3>
        <h5 className="text-primary">{blogs.duration}</h5>
        <button onClick={removePlace} className="bnt btn-danger ms-auto">
          X
        </button>
      </div>
      <div>
      </div>
    </div>
  );
};

export default ServiceDetails;
