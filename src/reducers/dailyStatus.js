import { GET_GLOBAL_DAILY_STATUS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_GLOBAL_DAILY_STATUS:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
