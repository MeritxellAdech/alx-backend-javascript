// Create a new string from given set

export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  let word = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      word += `${value.replace(startString, '')}-`;
    }
  }
  return word.slice(0, -1);
}
