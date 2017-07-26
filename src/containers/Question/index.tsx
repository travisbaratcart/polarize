import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState, ISurvey, ConstituencyLevel, IChoiceResults } from '../../reducers';
import { Survey, QuestionDetail, CounterContainer, Share, TakeAction } from '../../components';
import { getRandomNumberOfUsers } from '../../utils/random';

export namespace Question {
  export interface Props extends RouteComponentProps<void> {
    // empty
  }

  export interface State {
    /* empty */
  }
}

var choiceA = getRandomNumberOfUsers(1000);
var choiceB = getRandomNumberOfUsers(1000);
var choiceC = getRandomNumberOfUsers(1000);
var choiceD = getRandomNumberOfUsers(1000);
	
const exampleChoiceResults: IChoiceResults = {
	
	results: [{
	  choiceName: 'choice A',
	  choiceCount: choiceA
	},
	{
	  choiceName: 'choice B',
	  choiceCount: choiceB
	},
	{
	  choiceName: 'choice C',
	  choiceCount: choiceC
	},
	{
	  choiceName: 'choice D',
	  choiceCount: choiceD
	}]
}

var group1 = getRandomNumberOfUsers(1000);
var group2 = getRandomNumberOfUsers(1000);
var group3 = getRandomNumberOfUsers(1000);
var group4 = getRandomNumberOfUsers(1000);
var group5 = getRandomNumberOfUsers(1000);
const graphData = [group1, group2, group3, group4, group5];

var dems = getRandomNumberOfUsers(1000);
var republicans = getRandomNumberOfUsers(1000);
var independents = getRandomNumberOfUsers(1000);
var other = getRandomNumberOfUsers(1000);

@connect(mapStateToProps, mapDispatchToProps)
export class Question extends React.Component<Question.Props, Question.State> {

  render() {
    return (
      <div>
        <div className="app-heading">
          <h1>Pollarize</h1>
        </div>
        <div className="app-content">
          <QuestionDetail
            graphData={graphData}
            splitBarData={{
              'democrats': dems,
              'republicans': republicans,
              'independents': independents,
              'unidentified': other
            }} />
        </div>
		<CounterContainer data={exampleChoiceResults} />
		<Share />
		<TakeAction />
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
