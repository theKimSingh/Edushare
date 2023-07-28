import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img from "../imgs/logo.jpg";

const Carousels = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Img text="First slide" />
          <Carousel.Caption>
            <h3>Helping Communities</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img text="Second slide" />
          <Carousel.Caption>
            <h3>Connecting Beyond</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
