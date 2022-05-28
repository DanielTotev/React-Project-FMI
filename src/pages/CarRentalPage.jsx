import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { editCar, loadCarById } from "../util/carsUtils";
import { useFormState } from "../util/useFormState";
import DatePicker from "react-datepicker";
import moment from "moment";
import { getCurrentUser } from "../util/customerUtils";
import {
  addRent,
  getRentsForThePast90DaysForCurrentUser,
} from "../util/rentsUtils";
import { useNavigate } from "react-router-dom";

export default function CarRentalPage() {
  const { carId } = useParams();
  const [car, setCar] = useState({});
  const [formState, handleInputChange] = useFormState({
    startDate: "",
    endDate: "",
  });
  const [rentsInThePast90Days, setRentsInThePast90Days] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadCarById(carId).then((cars) => setCar(cars[0]));
  }, [carId]);

  useEffect(() => {
    getRentsForThePast90DaysForCurrentUser().then((rents) => {
      console.log(rents);
      setRentsInThePast90Days(rents);
    });
  }, []);

  const calculateDifferenceBetweenStartDateAndEndDate = () => {
    const startDateMoment = moment(formState.startDate);
    const endDateMoment = moment(formState.endDate);
    return endDateMoment.diff(startDateMoment, "days");
  };

  const calculateDiscount = () => {
    if (rentsInThePast90Days.length > 3) {
      return 15;
    }
    const daysDifference = calculateDifferenceBetweenStartDateAndEndDate();
    if (daysDifference > 10) {
      return 10;
    } else if (daysDifference > 5) {
      return 7;
    } else if (daysDifference > 3) {
      return 5;
    } else {
      return 0;
    }
  };

  const calculateTotal = () => {
    const daysDifference = calculateDifferenceBetweenStartDateAndEndDate();
    const totalWithoutDiscount = daysDifference * car.pricePerDay;
    const discount = calculateDiscount();
    if (discount === 0) {
      return totalWithoutDiscount;
    }
    return totalWithoutDiscount * (1 - discount / 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const total = calculateTotal();
    const user = getCurrentUser();
    const rentCar = {
      ...car,
      count: car.count - 1,
    };
    const rent = {
      startDate: formState.startDate,
      endDate: formState.endDate,
      car: rentCar,
      customer: user,
      total,
    };
    await addRent(rent);
    await editCar(rentCar);
    navigate("/cars");
  };

  return (
    <Container style={{ marginTop: "2em" }}>
      <div style={{ textAlign: "center" }}>
        <h1>
          Rent {car.brand} {car.model}
        </h1>
      </div>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                name="brand"
                value={car.brand}
                disabled={true}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="model">
              <Form.Label>Model</Form.Label>
              <Form.Control
                name="model"
                value={car.model}
                disabled={true}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="constructionYear">
              <Form.Label>Construction year</Form.Label>
              <Form.Control
                name="constructionYear"
                value={car.constructionYear}
                disabled={true}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="pricePerDay">
              <Form.Label>Price per day</Form.Label>
              <Form.Control
                name="pricePerDay"
                value={car.pricePerDay}
                disabled={true}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="count">
              <Form.Label>Available cars</Form.Label>
              <Form.Control
                name="count"
                value={car.count}
                disabled={true}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <DatePicker
                selected={formState.startDate}
                onChange={(date) =>
                  handleInputChange({
                    target: { name: "startDate", value: date },
                  })
                }
                className="form-control"
                name="startDate"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="endDate">
              <Form.Label>End Date</Form.Label>
              <DatePicker
                selected={formState.endDate}
                onChange={(date) =>
                  handleInputChange({
                    target: { name: "endDate", value: date },
                  })
                }
                className="form-control"
                name="endDate"
              />
            </Form.Group>
            <div className="mb-3">
              <span>
                Discount{" : "}
                {calculateDiscount() === 0
                  ? "No discount"
                  : `${calculateDiscount()} %`}
              </span>
              <br />
              <span>
                {rentsInThePast90Days.length > 3 ? "VIP CUSTOMER" : ""}
              </span>
            </div>
            {formState.startDate && formState.endDate && (
              <div className="mb-3">
                <span>Total: {calculateTotal()}</span>
              </div>
            )}
            <Button
              className="orange-button"
              type="submit"
              style={{ float: "right" }}
            >
              Submit Rent
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
