import Action from '../actions/_actions'

const initialState = () => ({
  allParticipants: [],
  winners: []
});
const lotteryPool = (state = initialState(), action) => {
  switch (action.type) {
    case Action.SET_LOTTERY_POOL:
      state.allParticipants = action.allParticipants || [];
      break;
    case Action.ADD_WINNER:
      if (action.winner) {
        state.winners.push(action.winner);
      }

  }
  return Object.assign({}, state);
};

export default lotteryPool
