import { combineReducers, Reducer } from 'redux';
// import { surveyReducer } from './surveys';
import * as actions from '../constants/actions';
import { SURVEYS } from '../constants/surveys';

export interface ISurveyQuestion {
  id: string;
  title: string;
  description: string;
  options: string[];
  optionType?: string;
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
  level: string,
  location: string;
  coordinates: string;
  population: number;
}

export interface ISurvey {
  id: string;
  questions: ISurveyQuestion[];
  author: ISurveyAuthor;
}

export interface IAnswer {
  questionId: string;
  answer: string;
}

export interface IChoiceResults {
  results: IChoiceData[];
}

interface IChoiceData {
  choiceName: string;
  choiceCount: number;
}

export interface RootState {
  answers: IAnswer[];
  submitted: boolean;
  surveyId: string;
}

export const reducer: Reducer<RootState> = (state: RootState, action: any) => {
  if (!state) {
    var initialSurvey: ISurvey = SURVEYS[0];

    state = {
      surveyId: initialSurvey.id,
      submitted: false,
      answers: initialSurvey.questions.map(question => {
        return {
          questionId: question.id,
          answer: null
        };
      })
    }
  }

  switch (action.type) {
    case actions.CHOOSE_ANSWER:
      return Object.assign({}, state, {
        answers: state.answers.map(answer => {
          if (answer.questionId === action.questionId) {
            return {
              questionId: answer.questionId,
              answer: action.answer
            };
          } else {
            return answer
          }
        })
      });

    case actions.SUBMIT_ANSWERS:
      return Object.assign({}, state, {
        submitted: true
      });

    case actions.GET_SURVEY:
      return Object.assign({}, state, {
        surveyId: action.surveyId
      });

    default:
      return state;
  }
}
