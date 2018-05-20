import Action from './_actions'
const setLottery = lottery => ({
  type: Action.SET_LOTTERY_POOL,
  lottery
});

export {
  setLottery
}