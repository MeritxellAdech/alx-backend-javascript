// This module creates an object of a promise that make use of its callbacks
/* eslint-disable no-unused-vars */

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    }
    reject(new Error('The fake API is not working currently'));
  });
}
