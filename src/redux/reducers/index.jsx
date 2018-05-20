import { combineReducers } from 'redux';
import lotteryPool from './lotteryPool';
import activitySetting from './activitySetting';
import lotteryDrawing from './lotteryDrawing';

export default combineReducers({
  lotteryPool,
  activitySetting,
  lotteryDrawing,
});
