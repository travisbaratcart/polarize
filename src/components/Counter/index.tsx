import * as React from 'react';

export namespace Counter {
  export interface Props {
    choiceName: string,
	choiceCount: number
  }

  export interface State {
    /* empty */
  }
}

export class Counter extends React.Component<Counter.Props, Counter.State> {

  constructor(props?: Counter.Props, context?: any) {
    super(props, context);
  }

  render() {
	const { choiceName, choiceCount } = this.props;
    return (
      <div className="counter-element">
	    <div className="content">
			<div className="choiceName">{choiceName}</div>
			<div className="choiceCount">{choiceCount}</div>
		</div>
      </div>
    );
  }
}
