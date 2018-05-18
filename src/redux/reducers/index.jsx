import { combineReducers } from 'redux';
import lotteryPool from './lotteryPool';
import activitySetting from './activitySetting';

export default combineReducers({
  lotteryPool,
  activitySetting,
});
