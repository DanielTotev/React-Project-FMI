import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useFormState } from "../../util/useFormState";

export default function CustomerForm({ submitAction }) {
  const [formState, handleInputChange] = useFormState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    repeatPassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    submitAction({
      fullName: formState.fullName,
      email: formState.email,
      phoneNumber: formState.phoneNumber,
      password: formState.password,
    });
  };
  return (
    <Row>
      <Col md={{ span: 4, offset: 4 }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              name="fullName"
              value={formState.fullName}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your name here"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              name="phoneNumber"
              value={formState.phoneNumber}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formState.password}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
            <Form.Label>Repeat Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="repeatPassword"
              value={formState.repeatPassword}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" style={{ float: "right" }}>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
