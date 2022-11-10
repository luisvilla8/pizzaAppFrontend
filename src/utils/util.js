export const getArrayFromNumber = (number = 0) => {
  let array = [];
  for (let index = 0; index < number; index++) {
    array.push("item");
  }
  return array;
}