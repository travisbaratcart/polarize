import * as React from 'react';
import * as Actions from '../../constants/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState, ISurvey, ConstituencyLevel, IChoiceResults } from '../../reducers';
import { Graph, Survey, SplitBar, Counter, CounterContainer } from '../../components';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    onSubmit: () => any;
    submitted: boolean;
  }

  export interface State {
    /* empty */
  }
}

const exampleSurvey: ISurvey = {
   id: 'aSurveyId',
   author: {
     imageUrl: 'https://lh5.googleusercontent.com/-3d-6t-KnblQ/UyoFC9UDB_I/AAAAAAAAASs/suyew-lv9B0/w1085-h1086/KG%2Bmayor%2Bhead%2Bshot%2Bjan%2B2014.jpg',
     displayName: 'Karen Guzak',
     title: 'Mayor',
     politicalParty: 'Democrat',
     constituency: {
       coordinates: '47.9129° N, 122.0982° W',
       location: 'Snohomish, Wa',
       level: ConstituencyLevel.City,
       population: 98290
     }
   },
   questions: [{
     id: 'q1',
     title: 'question1',
     description: 'description1',
     options: ['a', 'b', 'c']
   },
   {
     id: 'q2',
     title: '?',
     description: '????',
     options: ['yes?', 'no?', '?????']
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
