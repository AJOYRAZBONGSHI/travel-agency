import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <Navbar bg="dark">
        <Container>
          <span className="text-center">
            <img
              src="https://i.ibb.co/xFcq3Pp/Pngtree-an-airplane-airport-pilot-flight-3823863-1.png"
              alt=""
            />
            <span className="text-white fs-3 ms-5">
              Travel Agency @Copyright 2021
            </span>
          </span>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
