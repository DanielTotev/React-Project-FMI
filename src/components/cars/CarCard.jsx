import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CarCard({
  car,
  handleDeleteButtonClick,
  handleEditButtonClick,
}) {
  return (
    <Card style={{ height: "100%" }}>
      <Card.Img
        variant="top"
        src={`${car.imageUrl}`}
        style={{ height: "200px" }}
        alt="carImage"
      />
      <Card.Body>
        <Card.Title>{`${car.brand} ${car.model}`}</Card.Title>
        <p>Type: {car.type}</p>
        <p>Construction year: {car.constructionYear}</p>
        <p>Price per day: {car.pricePerDay} BGN</p>
        <p>Available cars: {car.count}</p>
        <Button className="orange-button" style={{ marginRight: "10px" }}>
          Rent
        </Button>
        <Button
          variant="primary"
          style={{ marginRight: "10px" }}
          onClick={() => handleEditButtonClick(car)}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={() => handleDeleteButtonClick(car)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
