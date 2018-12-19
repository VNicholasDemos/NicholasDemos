export default function findMatchingValueInArray(name, value, ArrayOfVariables) {
  let localCheck = false;
  for (let i = 0; i < ArrayOfVariables.length; i++) {
    if (
      ArrayOfVariables[i].Name === name &&
      localCheck === false &&
      ArrayOfVariables[i].Value === value
    ) {
      localCheck = true;
    }
  }
  return localCheck;
}
