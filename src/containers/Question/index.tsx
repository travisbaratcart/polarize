import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState, ISurvey, ConstituencyLevel } from '../../reducers';
import { Survey, QuestionDetail } from '../../components';

export namespace Question {
  export interface Props extends RouteComponentProps<void> {
    // empty
  }

  export interface State {
    /* empty */
  }
}

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
            graphData={[1,2,3,4,5]}
            splitBarData={{
              'democrats': 50,
              'republicans': 23,
              'independents': 30,
              'unidentified': 10
            }} />
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
