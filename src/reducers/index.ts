import { combineReducers, Reducer } from 'redux';
// import { surveyReducer } from './surveys';
import * as actions from '../constants/actions';

interface ISurveyQuestion {
  id: string;
  title: string;
  description: string;
  options: string[];
}

interface ISurveyAuthor {
  imageUrl: string;
  displayName: string;
  title: string;
  politicalParty: string;
  constituency: IConstituency;
}

export enum ConstituencyLevel {
  City,
  County,
  State,
  Federal
}

interface IConstituency {
  level: ConstituencyLevel,
  location: string;
  coordinates: string;
  population: number;
}

export interface ISurvey {
  id: string;
  questions: ISurveyQuestion[];
  author: ISurveyAuthor;
}

interface IAnswer {
  questionId: string;
  optionId: string;
}

export interface IChoiceResults {
  results: IChoiceData[];
}

interface IChoiceData {
  choiceName: string;
  choiceCount: number;
}

export interface RootState {
  surveys: ISurvey[];
  currentSurvey: string;
  currentQuestion: string;
  answers: IAnswer[];
  submitted: boolean;
}

export const reducer: Reducer<RootState> = (state: RootState = <RootState>{}, action: any) => {
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

    case actions.CHOOSE_QUESTION:
      return Object.assign({}, state, {
        currentQuestion: action.questionId
      });

    case actions.SUBMIT_ANSWERS:
      console.log('submitting answers');
      return Object.assign({}, state, {
        submitted: true
      });

    default:
      return state;
  }
}
