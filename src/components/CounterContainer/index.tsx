import * as React from 'react';
import { IChoiceResults } from '../../reducers/index';
import { Counter } from '../Counter';

interface ICounterContainerProps {
  data: IChoiceResults
};

export class CounterContainer extends React.Component<ICounterContainerProps, {}> {

  render() {
		const myResults = this.props.data;
		const choiceResults = myResults.results.map((result) => 
		{
			return (
				<Counter 
				  choiceName={result.choiceName}
				  choiceCount={result.choiceCount} />
			);
		});
		return (
		  <div className="counter-container">
		  {choiceResults}
		  </div>
		);
  }
}

