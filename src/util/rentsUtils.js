const apiUrl = "http://localhost:3005/rents";

export const addRent = (rent) => {
  return fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(rent),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
