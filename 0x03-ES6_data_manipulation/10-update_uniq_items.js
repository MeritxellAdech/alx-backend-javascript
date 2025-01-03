// Update map value from 1 to 100
/* eslint-disable no-unused-vars */
import groceriesList from './9-groceries_list';

export default function updateUniqueItems(groceriesList) {
  if (!(groceriesList instanceof Map)) {
    throw new Error('Cannot process');
  }
  groceriesList.forEach((value, key, map) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
