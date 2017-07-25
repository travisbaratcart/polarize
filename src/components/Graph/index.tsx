import * as React from 'react';
import * as d3 from 'd3';
import { Chart, BarChart } from 'react-d3';

export namespace Graph {
  export interface Props {
    data: any,
  }

  export interface State {
    /* empty */
  }
}

export class Graph extends React.Component<Graph.Props, Graph.State> {

  constructor(props?: Graph.Props, context?: any) {
    super(props, context);
  }

  render() {
    const { data } = this.props;
    var barData = [
      {
        "values": [
          { x: "18-25", "y":  data[0] },
          { x: "25-32", "y": data[1] },
          { x: "33-40", "y": data[2] },
          { x: "40-54", "y": data[3] },
          { x: "55+", "y": data[4] },
        ]
      },
    ];
    return (
      <div className="graph-container">
        <BarChart
          data={barData}
          width={400}
          height={300}
          title="Number of responders vs. Age"
          xAxisLabel=""
          yAxisLabel=""
          />
      </div>
    );
  }
}
