import Action from '../actions/_actions'

const initialState = () => ({
    setting: [{
      id: 10001,
      title: '幸运奖',
      totalCount: 3,
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