export default function findMatchingNameInArray(name, ArrayOfVariables) {
  console.log(ArrayOfVariables);
  for (let i = 0; i < ArrayOfVariables.length; i++) {
    if (
      ArrayOfVariables[i].Name === name
    ) {
      return i;
    }
  }
  return null;
}
