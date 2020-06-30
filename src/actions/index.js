export const FETCH_AUTOS = 'FETCH_AUTOS';

export function fetchAutos(garage) {
  const ROOT_URL = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  //const API_KEY = 'WAGON-BLOG';
  const promise = fetch(`${ROOT_URL}`)
    .then(response => response.json());
  return {
    type: FETCH_AUTOS,
    payload: promise
  }
}
