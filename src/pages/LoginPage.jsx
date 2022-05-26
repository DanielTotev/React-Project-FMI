import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../util/customerUtils";
import { useFormState } from "../util/useFormState";

export default function LoginPage() {
  const [formState, handleInputChange] = useFormState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(formState)
      .then(() => {
        navigate("/cars");
      })
      .catch(() => {
        setError("Invalid email/password");
      });
  };
  return (
    <Container style={{ marginTop: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      {error && (
        <div
          className="alert alert-danger"
          style={{ maxWidth: "75%", margin: "10px auto" }}
        >
          {error}
        </div>
      )}
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formState.email}
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
            <Button variant="primary" type="submit" style={{ float: "right" }}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
