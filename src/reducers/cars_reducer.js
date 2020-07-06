import { FETCH_AUTOS } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_AUTOS:
      return action.payload;
    default:
      return state;
  }
}
