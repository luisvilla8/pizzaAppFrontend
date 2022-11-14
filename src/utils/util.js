export const getArrayFromNumber = (number = 0) => {
  let array = [];
  for (let index = 0; index < number; index++) {
    array.push("item");
  }
  return array;
}

export const getSumTotal = (array = [], attr = "") => {
  const total = array.reduce((acc, item) => {
    return acc + (item[attr] * item["cantidad"]);
  }, 0);
  return total;
}