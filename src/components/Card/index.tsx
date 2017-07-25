import * as React from 'react';

export namespace Card {
  export interface Props {
    cardNumber: string,
    question: string,
    description: string,
    optionType: string,
    options: optionData[]
  }

  export interface State {
    selectedVal: string;
  }
}

export class Card extends React.Component<Card.Props, Card.State> {

  constructor(props?: Card.Props, context?: any) {
    super(props, context);
    this.state = {selectedVal: ''};
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event) {
   this.setState({selectedVal: event.target.value});
  }

  render() {
    const { cardNumber, question, description, optionType, options } = this.props;
    var optionItems = options.map(function(option) {
      return (
        <div className="options-list">
          <input
            type={optionType}
            name={question}
            id={option.name}
            value={option.value} />
          <label htmlFor={option.name}>{option.value}</label>
        </div>
      );
    });
    return (
      <div className="card-container">
        <span className="card-no">{cardNumber}</span>
        <div className="heading">
          <h1>{question}</h1>
        </div>
        <div className="content">
          <p>{description}</p>
          {optionItems}
        </div>
      </div>
    );
  }
}
