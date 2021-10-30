import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ServiceBlog from "../ServiceBlog/ServiceBlog";
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

  return (
    <div className="blogs-container">
      <h1>You are selected :</h1>
      <div>
        <h3>Name:{blogs.name} </h3>
        <h5>Duration:{blogs.duration}</h5>
      </div>
      <div>
        {/* {blogs.map((blog) => (
          <ServiceBlog key={blog._id} service={blog}></ServiceBlog>
        ))} */}
      </div>
    </div>
  );
};

export default ServiceDetails;
