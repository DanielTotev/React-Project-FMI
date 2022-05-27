import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { loadAllCustomers } from "../util/customerUtils";

export default function CustomersListPage() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadAllCustomers().then((res) => setCustomers(res));
  }, []);

  return (
    <Container>
      <div
        style={{ textAlign: "center", marginBottom: "2em", marginTop: "2em" }}
      >
        <h1>Customers</h1>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Actions</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>
                <i
                  className="fa fa-pencil"
                  style={{
                    margin: "0 10px",
                    color: "#0d6efd",
                    cursor: "pointer",
                  }}
                ></i>
                <i
                  className="fa-solid fa-trash-can"
                  style={{ color: "#dc3545", cursor: "pointer" }}
                ></i>
              </td>
              <td>{customer.fullName}</td>
              <td>{customer.email}</td>
              <td>{customer.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
