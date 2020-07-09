export const FETCH_CARS = 'FETCH_CARS';
export const CAR_CREATED = 'CAR_CREATED';
export const CAR_REMOVED = 'CAR_REMOVED';

const BASE_URL = 'https://wagon-garage-api.herokuapp.com';

export function fetchCars(garage) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url)
    .then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  }
}

export function createCar(garage, car, callback) {
	const url = `${BASE_URL}/${garage}/cars`;
  const request = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  })
    .then(response => response.json())
    .then(() => callback());
  return {
    type: CAR_CREATED,
    payload: request
  };
}

export function removeCar(history, car) {
  const url = `${BASE_URL}/cars/${car.id}`;
  fetch(url, { method: 'DELETE'})
    .then(r => r.json())
    .then(() => history.push(""));
  return {
    type: CAR_REMOVED,
    payload: car
  };
}