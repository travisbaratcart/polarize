import * as React from 'react';

export namespace Card {
  export interface Props {
    question: string,
    optionType: string,
    options: optionData[]
  }

  export interface State {
    /* empty */
  }
}

export class Card extends React.Component<Card.Props, Card.State> {

  constructor(props?: Card.Props, context?: any) {
    super(props, context);
  }

  render() {
    const { question, optionType, options } = this.props;
    var optionItems = this.props.options.map(function(option) {
      return (
        <div>
          <input
            type={optionType}
            name={question}
            id={option.name}
            value={option.value}/>
          <label htmlFor={option.name}>{option.value}</label>
        </div>
      );
    });
    return (
      <div className="card-container">
        <h1>{question}</h1>
        {optionItems}
      </div>
    );
  }
}
