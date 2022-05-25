import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CarCard from "../components/cars/CarCard";
import { loadCars } from "../util/carsUtils";

export default function CarsListPage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    loadCars().then((cars) => {
      setCars(cars);
    });
  }, []);

  return (
    <Container>
      <div style={{ textAlign: "center", marginBottom: "2em" }}>
        <h1>Cars</h1>
      </div>
      <Row>
        {cars.map((car) => (
          <Col md="3" key={car.id} style={{ marginTop: "20px" }}>
            <CarCard car={car} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
