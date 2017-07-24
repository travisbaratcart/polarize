import * as Actions from '../constants/actions';

export const surveyReducer = (state = [], action) => {
  if (action.type === Actions.RECEIVE_SURVEYS) {
    return action.payload;
  } else {
    return state;
  }
}
