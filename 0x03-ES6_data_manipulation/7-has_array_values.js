// Check if a value is found in a given set

export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
