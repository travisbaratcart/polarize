import * as React from 'react';
import { Router, Route, Switch, RouteComponentProps, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState, ISurvey, ConstituencyLevel, IChoiceResults, ISurveyQuestion } from '../../reducers';
import { Survey, QuestionDetail, CounterContainer, Share, TakeAction } from '../../components';
import { getRandomNumberOfUsers } from '../../utils/random';
import { SURVEYS, getSurveyFromId } from '../../constants/surveys';

export namespace Question {
  export interface Props extends RouteComponentProps<void> {
	  match? : any;
    surveyId: string;
  }

  export interface State {
    /* empty */
  }
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
	  const questionId = this.props.match.params.qid;
	  const currentSurvey: ISurvey = getSurveyFromId(this.props.surveyId);

	  var surveyQuestion : ISurveyQuestion = null;

		for (var i = 0; i < currentSurvey.questions.length; i++) {
			if (currentSurvey.questions[i].id === questionId) {
				surveyQuestion = currentSurvey.questions[i];
			}
		}

	var choiceResults: IChoiceResults =
	{
		results : []
	};

	surveyQuestion.options.map((questionOption) => {
		var optionCount = getRandomNumberOfUsers(1000);
		choiceResults.results.push({ choiceName: questionOption, choiceCount: optionCount });
	});
    return (
      <div>
        <div className="app-heading">
          <h1>Pollarize</h1>
        </div>
        <div className="app-content">
		  <div className="back-btn">
		    <Link to={'/'}><img src="../../assets/back.png" /><span>Survey</span></Link>
		  </div>
		  <div className="survey-question">{surveyQuestion.title}</div>
          <QuestionDetail
            graphData={graphData}
            splitBarData={{
              'democrats': dems,
              'republicans': republicans,
              'independents': independents,
              'unidentified': other
            }} />
        </div>
		<CounterContainer data={choiceResults} />
		<Share />
		<TakeAction />
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    surveyId: state.surveyId
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}
