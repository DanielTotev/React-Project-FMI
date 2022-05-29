import { useState } from "react";

export function useFormState(initialState, validators = {}) {
  const [formState, setFormstate] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);
  const clearError = (fieldName) => {
    const updatedErrors = { ...errors };
    delete updatedErrors[fieldName];
    setErrors(updatedErrors);
  };
  function applyValidators(fieldName, value) {
    const fieldValidators = validators[fieldName];
    if (fieldValidators) {
      for (let i = 0; i < fieldValidators.length; i++) {
        const currentValidator = fieldValidators[i];
        const validationResult = currentValidator(value, formState);
        if (!validationResult.valid) {
          setErrors({
            ...errors,
            [fieldName]: validationResult.message,
          });
          break;
        } else {
          clearError(fieldName);
        }
      }
    }
  }
  const handleInputChange = (event) => {
    applyValidators(event.target.name, event.target.value);
    setFormstate({
      ...formState,
      [event.target.name]: event.target.value,
    });
    if (!touched) {
      setTouched(true);
    }
  };
  return [formState, handleInputChange, errors, touched];
}
