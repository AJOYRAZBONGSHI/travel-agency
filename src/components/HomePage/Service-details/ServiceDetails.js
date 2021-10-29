import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ServiceBlog from "../ServiceBlog/ServiceBlog";
import './ServiceDetails.css'

const ServiceDetails = () => {
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  const { serviceId } = useParams();
  return (
    <div className='blogs-container'>
      <h1>You are selected : {serviceId}</h1>
      <div>
        {blogs.map((blog) => (
          <ServiceBlog key={blog.id} service={blog}></ServiceBlog>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
