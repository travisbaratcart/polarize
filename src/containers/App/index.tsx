import * as React from 'react';
import * as Actions from '../../constants/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState, ISurvey, ConstituencyLevel, IChoiceResults } from '../../reducers';
import { Graph, Survey, SplitBar, Counter, CounterContainer } from '../../components';
import { SURVEYDATA } from '../../constants/surveys';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    onSubmit: () => any;
    submitted: boolean;
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
          <Survey survey={exampleSurvey} submitted={this.props.submitted} onSubmit={this.props.onSubmit}/>
          <Graph data={[1,2,3,4,5]}/>
          <SplitBar data={{
            'democrats': 50,
            'republicans': 23,
            'independents': 30,
            'unidentified': 10
          }}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    submitted: state.submitted
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: () => {
      dispatch({
        type: Actions.SUBMIT_ANSWERS
      });
    }
  };
}
