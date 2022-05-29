export const notEmpty = (value) => ({
  valid: value !== "",
  message: "Field cannot be empty",
});

export const equalTo = (value, formState, keyName) => ({
  valid: value === formState[keyName],
  message: `Field value must be equal to ${keyName}`,
});

export const isEmail = (value) => ({
  valid: value.includes("@"),
  message: "Field mut be email",
});
