import { getCurrentUser } from "./customerUtils";
import moment from "moment";

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

export const getRentsForThePast90DaysForCurrentUser = async () => {
  const user = getCurrentUser();
  const currentDay = new Date().toISOString();
  const before90Days = moment(currentDay)
    .subtract(90, "days")
    .toDate()
    .toISOString();
  console.log(before90Days);
  const res = await fetch(
    `${apiUrl}?customer.id=${user.id}&startDate_gte=${before90Days}&endDate_lte=${currentDay}`
  );
  return await res.json();
};
