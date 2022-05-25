const apiUrl = "http://localhost:3005/vehicles";

export const loadCars = () => {
  return fetch(apiUrl).then((res) => res.json());
};

export const addCar = (car) => {
  return fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(car),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
