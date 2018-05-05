import Action from '../actions/_actions'

const initialState = () => ({
  allParticipants: ['hello'],
  winners: []
});
const lotteryPool = (state = initialState(), action) => {
  switch (action.type) {
    case Action.SET_LOTTERY_POOL:
      state.allParticipants = action.allParticipants || [];
  }
  return Object.assign({}, state);
};

export default lotteryPool