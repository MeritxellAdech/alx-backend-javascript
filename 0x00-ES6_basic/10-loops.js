// looping through the array using ES6 approach
export default function appendToEachArrayValue(array, appendString) {
  const collection = [];
  let i = 0;
  for (const idx of array) {
    collection[i] = appendString + idx;
    i += 1;
  }

  return collection;
}
