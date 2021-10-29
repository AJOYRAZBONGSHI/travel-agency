import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <Navbar bg="dark">
        <Container>
          <span className='text-center'>
            <img src="https://i.ibb.co/DfXRRy3/pngwing-com.png" alt="" />
            <span className="text-white fs-3 ms-5">
              Fitness Gym Center @Copyright 2021
            </span>
          </span>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
