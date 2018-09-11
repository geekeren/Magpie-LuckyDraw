import Action from '../actions/_actions'

const initialState = () => ({
    setting: [{
      id: 10003,
      title: '三等奖',
      totalCount: 3,
    },{
      id: 10002,
      title: '二等奖',
      totalCount: 2,
    },{
      id: 10001,
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