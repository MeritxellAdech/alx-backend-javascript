//

export default function handleResponseFromAPI(promise) {
  promise.then(
    (res) => res,
  ).catch(() => new Error()).finally(() => {
    console.log('Got a response from the API');
  });
}
