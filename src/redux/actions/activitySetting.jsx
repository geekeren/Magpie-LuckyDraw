import Action from './_actions'
const setActivityName = name => ({
  type: Action.SET_ACTIVITY_NAME,
  name
});
export {
  setActivityName
}