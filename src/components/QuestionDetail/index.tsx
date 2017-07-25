import * as React from 'react';
import { Graph, SplitBar } from '../../components';

export namespace QuestionDetail {
  export interface Props {
    graphData: any,
    splitBarData: any
  }

  //graph data is an array of counts by age

  // splibar data looks like this
  // {
  //   'democrats': 50,
  //   'republicans': 23,
  //   'independents': 30,
  //   'unidentified': 10
  // }

  export interface State {
    /* empty */
  }
}

export class QuestionDetail extends React.Component<QuestionDetail.Props, QuestionDetail.State> {

  constructor(props?: QuestionDetail.Props, context?: any) {
    super(props, context);
  }

  render() {
    const { graphData, splitBarData } = this.props;
    return (
      <div className="questiondetail-container">
        <Graph data={graphData}/>
        <SplitBar data={splitBarData}/>
      </div>
    );
  }
}
