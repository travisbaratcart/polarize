import * as React from 'react';
import * as Actions from '../../constants/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState, IAnswer, ISurvey, ConstituencyLevel, IChoiceResults } from '../../reducers';
import { Graph, Survey, SplitBar, Counter, CounterContainer } from '../../components';
import { SURVEYDATA } from '../../constants/surveys';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    onSubmit: () => any;
    submitted: boolean;
    answers: IAnswer[];
    onChangeAnswer: (questionId: string, answer: string) => void;
  }

  export interface State {
    /* empty */
  }
}

const exampleSurvey: ISurvey = SURVEYDATA;

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<App.Props, App.State> {

  render() {
    return (
      <div>
        <div className="app-heading">
          <h1>Pollarize</h1>
          <ul>
            <li className="selected">
              <a href="">City</a>
            </li>
            <li>
              <a href="">County</a>
            </li>
            <li>
              <a href="">State</a>
            </li>
            <li>
              <a href="">Federal</a>
            </li>
          </ul>
        </div>
        <div className="app-content">
          <Survey
            survey={exampleSurvey}
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
    answers: state.answers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: () => {
      window.scrollTo(0, 200);
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
