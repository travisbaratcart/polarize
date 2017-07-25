import * as React from 'react';

export namespace Card {
  export interface Props {
    question: string,
    description: string,
    optionType: string,
    options: optionData[]
  }

  export interface State {
    value: string;
  }
}

export class Card extends React.Component<Card.Props, Card.State> {

  constructor(props?: Card.Props, context?: any) {
    super(props, context);
    this.state = {value: ''};
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event) {
   this.setState({value: event.target.value});
 }

  render() {
    const { question, description, optionType, options } = this.props;
    var optionItems = this.props.options.map(function(option) {
      return (
        <div>
          <input
            type={optionType}
            name={question}
            id={option.name}
            value={option.value}
            onChange={this.handleOptionChange}/>
          <label htmlFor={option.name}>{option.value}</label>
        </div>
      );
    });
    return (
      <div className="card-container">
        <h1>{question}</h1>
        <p>{description}</p>
        {optionItems}
      </div>
    );
  }
}
