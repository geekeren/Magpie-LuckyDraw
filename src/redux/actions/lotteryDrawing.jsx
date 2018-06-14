import Action from './_actions'
const setLottery = lottery => ({
  type: Action.SET_LOTTERY_SETTING,
  lottery
});

export {
  setLottery
}