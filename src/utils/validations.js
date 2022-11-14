export const validateIsEmpty = (value = "") => {
  return value === '' || value === null || value === undefined;
}

export const validateNumberDigits = (value = "", digits = 0) => {
  return value.length === digits;
}

export const validateIsOnlyString = (value = "") => {
  return /^[a-zA-Z]+$/.test(value);
}