import Action from './_actions'
const setLotteryPool = allParticipants => ({
  type: Action.SET_LOTTERY_POOL,
  allParticipants
});

const addWinner = winner => ({
  type: Action.ADD_WINNER,
  winner
});

export {
  setLotteryPool,
  addWinner
}