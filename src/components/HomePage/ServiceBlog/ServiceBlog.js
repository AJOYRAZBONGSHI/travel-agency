import React from 'react';

const ServiceBlog = (props) => {
    const{id,name,img,price}= props?.service;
    return (
        <div>
            <img src={img} alt="#" />
            <h1>{id}</h1>
            <h1>{name}</h1>
            <h3>{price}</h3>
        </div>
    );
};

export default ServiceBlog;