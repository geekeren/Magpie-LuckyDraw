import Action from '../actions/_actions'

const uuidv4 = require('uuid/v4');
const initialState = () => ({
    setting: [{
      id: uuidv4(),
      title: '三等奖',
      totalCount: 3,
    },{
      id: uuidv4(),
      title: '二等奖',
      totalCount: 2,
    },{
      id: uuidv4(),
      title: '一等奖',
      totalCount: 1,
    }]
  }
);
const lotteryDrawing = (state = initialState(), action) => {
  switch (action.type) {
    case Action.SET_LOTTERY_SETTING:
      state.setting = action.lottery;
  }
  return Object.assign({}, state);
};

export default lotteryDrawing