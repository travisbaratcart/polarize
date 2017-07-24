import { combineReducers, Reducer } from 'redux';
import { surveyReducer } from './surveys';
import * as actions from '../constants/actions';

interface ISurveyQuestion {
  id: string;
  text: string;
  options: ISurveyQuestionOption[];
}

interface ISurveyQuestionOption {
  id: string;
  text: string;
  value: any;
}

interface ISurvey {
  id: string;
  questions: ISurveyQuestion[];
}

interface IAnswer {
  questionId: string;
  optionId: string;
}

export interface RootState {
  surveys: ISurvey[];
  currentSurvey: string;
  currentQuestion: string;
  answers: IAnswer[];
}

export const reducer: Reducer<RootState> = (state: RootState, action: any) => {
  switch (action.type) {
    case actions.RECEIVE_SURVEYS:
      return Object.assign({}, state, {
        surveys: action.surveys
      });

    case actions.CHOOSE_SURVEY:
      const newSurveyId = action.surveyId;
      const surveyQuestions = state.surveys.filter(survey => survey.id === action.surveyId)[0].questions;
      const surveyAnswers = surveyQuestions.map(question => {
        return {
          questionId: question.id,
          optionId: null
        };
      });

      return Object.assign({}, state, {
        currentSurvey: action.surveyId,
        answers: surveyAnswers
      });

    case actions.CHOOSE_ANSWER:
      return Object.assign({}, state, {
        answers: state.answers.map(answer => {
          if (answer.questionId === action.questionId) {
            return {
              questionId: answer.questionId,
              optionId: action.optionId
            };
          } else {
            return answer
          }
        })
      });

    default:
      return state;
  }
}
