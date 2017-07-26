import * as React from 'react';
import * as Actions from '../../constants/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState, IAnswer, ISurvey, ConstituencyLevel, IChoiceResults } from '../../reducers';
import { Graph, Survey, SplitBar, Counter, CounterContainer } from '../../components';
import { SURVEYS, getSurveyFromId, getSurveyQuestionsFromId } from '../../constants/surveys';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    onSubmit: () => any;
    submitted: boolean;
    answers: IAnswer[];
    onChangeAnswer: (questionId: string, answer: string) => void;
    surveyId: string;
    chooseSurvey: (surveyId: string) => void;
  }

  export interface State {
    //empty
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<App.Props, App.State> {

  getChooseSurveyFunction = (surveyId: string) => {
    return (e: any) => {
      e.preventDefault();
      this.props.chooseSurvey(surveyId);
    }
  }

  render() {
    const tabs = SURVEYS.map((survey) => {
      return (
          <li className={survey.id === this.props.surveyId ? 'selected' : ''}>
            <a href="" onClick={this.getChooseSurveyFunction(survey.id)}>{survey.author.constituency.level}</a>
          </li>
        );
    })

    return (
      <div>
        <div className="app-heading">
          <h1><a href="/">Pollarize</a></h1>
          <ul>
            {tabs}
          </ul>
        </div>
        <div className="app-content">
          <Survey
            survey={getSurveyFromId(this.props.surveyId)}
            submitted={this.props.submitted}
            onSubmit={this.props.onSubmit}
            answers={this.props.answers}
            onChangeAnswer={this.props.onChangeAnswer} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    submitted: state.submitted,
    answers: state.answers,
    surveyId: state.surveyId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    chooseSurvey: (surveyId: string) => {
      dispatch({
        type: Actions.GET_SURVEY,
        surveyId
      });
    },
    onSubmit: () => {
      window.scrollTo(0, 280);
      dispatch({
        type: Actions.SUBMIT_ANSWERS
      });
    },
    onChangeAnswer: (questionId: string, answer: string) => {
      dispatch({
        type: Actions.CHOOSE_ANSWER,
        questionId,
        answer
      });
    }
  };
}
