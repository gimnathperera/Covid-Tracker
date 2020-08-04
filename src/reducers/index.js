import { combineReducers } from 'redux';

import diseases from './diseases';
import dailyStatus from './dailyStatus';
import countries from './countries';
export default combineReducers({
  diseases,
  countries,
  dailyStatus
});
