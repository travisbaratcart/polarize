import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState, ISurvey, ConstituencyLevel, IChoiceResults } from '../../reducers';
import { Graph, Survey, SplitBar, Counter, CounterContainer } from '../../components';
import { SURVEYDATA } from '../../constants/surveys';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    // empty
  }

  export interface State {
    /* empty */
  }
}

const exampleSurvey: ISurvey = SURVEYDATA;

const exampleChoiceResults: IChoiceResults = {
	results: [{
	  choiceName: 'choice A',
	  choiceCount: 42
	},
	{
	  choiceName: 'choice B',
	  choiceCount: 1042
	},
	{
	  choiceName: 'choice C',
	  choiceCount: 2048
	}]
}

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
          <Survey survey={exampleSurvey} />
		      <CounterContainer data={exampleChoiceResults} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}
