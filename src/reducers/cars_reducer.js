import { CAR_CREATED } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case CAR_CREATED:
      return action.payload;
    default:
      return state;
  }
}