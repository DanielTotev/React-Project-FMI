import { Modal, Button, Form } from "react-bootstrap";
import React from "react";
import { useFormState } from "../../util/useFormState";
import { addCar } from "../../util/carsUtils";

export default function CarPopup({ show, handleClose, submitAction }) {
  const [formState, handleInputChange] = useFormState({
    brand: "",
    model: "",
    type: "economy",
    fuelType: "petrol",
    numberOfSeats: 0,
    pricePerDay: 0,
    count: 0,
    imageUrl: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    addCar(formState).then(() => {
      submitAction();
      handleClose();
    });
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="brand">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              name="brand"
              value={formState.brand}
              onChange={handleInputChange}
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="model">
            <Form.Label>Model</Form.Label>
            <Form.Control
              name="model"
              value={formState.model}
              onChange={handleInputChange}
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="type">
            <Form.Label>Type</Form.Label>
            <Form.Select
              name="type"
              value={formState.type}
              onChange={handleInputChange}
            >
              <option value="economy">Economy</option>
              <option value="estate">Estate</option>
              <option value="luxury">Luxury</option>
              <option value="SUV">SUV</option>
              <option value="cargo">Cargo</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="fuelType">
            <Form.Label>Fuel Type</Form.Label>
            <Form.Select
              name="fuelType"
              value={formState.fuelType}
              onChange={handleInputChange}
            >
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="hybrid">Hybrid</option>
              <option value="electric">Electric</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="numberOfSeats">
            <Form.Label>Number of seats</Form.Label>
            <Form.Control
              name="numberOfSeats"
              type="number"
              value={formState.numberOfSeats}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="imageUrl">
            <Form.Label>Picture url</Form.Label>
            <Form.Control
              name="imageUrl"
              type="text"
              value={formState.imageUrl}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="pricePerDay">
            <Form.Label>Price per day</Form.Label>
            <Form.Control
              name="pricePerDay"
              type="number"
              value={formState.pricePerDay}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="count">
            <Form.Label>Count</Form.Label>
            <Form.Control
              name="count"
              type="number"
              value={formState.count}
              onChange={handleInputChange}
            />
          </Form.Group>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="secondary"
              onClick={handleClose}
              style={{ marginRight: "10px" }}
            >
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
