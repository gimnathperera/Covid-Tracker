import { GET_GLOBAL_STATUS, GET_STATUS_BY_COUNTRY } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_GLOBAL_STATUS:
      return {
        ...state,
        ...action.payload
      };
    case GET_STATUS_BY_COUNTRY:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
