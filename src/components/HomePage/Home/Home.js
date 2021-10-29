import React, { useEffect, useState } from "react";
import "./Home.css";
import Services from "../../HomePage/Services/Services";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container">
      <div className="banner">
        <div className='d-flex h-100 align-items-center justify-content-center'>
          <h1 className="text-white inline-block">
            Welcome to our Fitness Gym Center
          </h1>
        </div>
      </div>
      <div className="services-container my-5">
        {services.map((service) => (
          <Services key={service.id} service={service}></Services>
        ))}
      </div>
    </div>
  );
};

export default Home;
