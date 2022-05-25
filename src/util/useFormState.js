import { useState } from "react";

export function useFormState(initialState) {
  const [formState, setFormstate] = useState(initialState);
  const handleInputChange = (event) => {
    setFormstate({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  return [formState, handleInputChange];
}
