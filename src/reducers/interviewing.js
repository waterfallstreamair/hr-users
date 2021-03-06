import * as constants from '../constants/index';
const initialState = []

const interviewing = (state = initialState, action) => {
  switch (action.type) {
    case constants.TYPE_INTERVIEWING_USERS_ADD:
      return [...state, action.user];
    case constants.TYPE_INTERVIEWING_USERS_REMOVE:
      return state.filter(e => e.login.uuid !== action.user.login.uuid);
    default:
      return state;
  }
};

export default interviewing;
