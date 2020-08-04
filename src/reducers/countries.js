import { GET_INFECTED_STATES } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_INFECTED_STATES:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
