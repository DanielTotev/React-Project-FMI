import React from "react";
import { useParams } from "react-router-dom";

export default function CarRentalPage() {
  const { carId } = useParams();
  console.log(carId);
  return <div>CarRentalPage</div>;
}
