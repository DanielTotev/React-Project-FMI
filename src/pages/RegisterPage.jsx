import React from "react";
import { Container } from "react-bootstrap";
import CustomerForm from "../components/customer/CustomerForm";
import { useNavigate } from "react-router-dom";
import { registerCustomer } from "../util/customerUtils";

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleUserRegistration = async (formData) => {
    await registerCustomer(formData);
    navigate("/login");
  };

  return (
    <Container className="mt-4">
      <div style={{ textAlign: "center" }}>
        <h1>Register</h1>
      </div>
      <CustomerForm submitAction={handleUserRegistration} />
    </Container>
  );
}
