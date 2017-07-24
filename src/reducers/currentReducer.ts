import * as Actions from '../constants/actions';

export const currentSurveyReducer = (state, action) => {
  switch (action.type) {
    case Actions.CHOOSE_SURVEY:
      return Object.assign({}, state, {

      });

    default:
      return state;
  }
}
