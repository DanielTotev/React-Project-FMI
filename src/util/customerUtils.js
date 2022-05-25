const apiUrl = "http://localhost:3005/customers";

export const registerCustomer = (customer) => {
  return fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(customer),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
