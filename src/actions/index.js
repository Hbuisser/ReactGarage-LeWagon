export const FETCH_AUTOS = 'FETCH_AUTOS';
const BASE_URL = 'https://wagon-garage-api.herokuapp.com';


export function fetchAutos(garage) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url)
    .then(response => response.json());
  return {
    type: FETCH_AUTOS,
    payload: promise
  }
}

