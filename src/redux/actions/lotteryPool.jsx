import Action from './_actions'
const setLotteryPool = allParticipants => ({
  type: Action.SET_LOTTERY_POOL,
  allParticipants
});

export {
  setLotteryPool
}