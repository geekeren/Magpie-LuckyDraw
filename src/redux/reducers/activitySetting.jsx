import Action from '../actions/_actions'

const initialState = () => ({
  name: "",
});
const activitySetting = (state = initialState(), action) => {
  switch (action.type) {
    case Action.SET_ACTIVITY_NAME:
      state.name = action.name || "Magpie 抽奖平台";
  }
  return Object.assign({}, state);
};

export default activitySetting