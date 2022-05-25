const apiUrl = "http://localhost:3005/vehicles";

export const loadCars = () => {
  return fetch(apiUrl).then((res) => res.json());
};
