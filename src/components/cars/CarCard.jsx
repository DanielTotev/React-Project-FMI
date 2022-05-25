import React from "react";
import { Card } from "react-bootstrap";

export default function CarCard({ car }) {
  return (
    <Card style={{ height: "100%" }}>
      <Card.Img variant="top" src={`${car.imageUrl}`} alt="carImage" />
      <Card.Body>
        <Card.Title>{`${car.brand} ${car.model}`}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}
