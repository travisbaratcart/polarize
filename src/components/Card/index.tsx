import * as React from 'react';
import { ISurveyQuestion } from '../../reducers';

export namespace Card {
  export interface Props {
    cardNumber: number;
    question: ISurveyQuestion;
    optionType: string;
    answer: string;
    onChangeAnswer: (questionId: string, answer: string) => void;
  }
}

export class Card extends React.Component<Card.Props, {}> {

  constructor(props?: Card.Props, context?: any) {
    super(props, context);
  }

  changeAnswer = (e: any) => {
    this.props.onChangeAnswer(
      this.props.question.id,
      e.currentTarget.value);
  }

  render() {
    const { cardNumber, question, optionType } = this.props;
    var optionItems = question.options.map((option, optionNumber) => {
      return (
        <div className="options-list" key={optionNumber}>
          <input
            type={optionType}
            name={question.title}
            id={option}
            value={option}
            checked={this.props.answer === option}
            onChange={this.changeAnswer} />
          <label htmlFor={option}>{option}</label>
        </div>
      );
    });
    return (
      <div className="card-container">
        <span className="card-no">{cardNumber}</span>
        <div className="heading">
          <h1>{question.title}</h1>
        </div>
        <div className="content">
          <p>{question.description}</p>
          {optionItems}
          <a className="activity-link" href={'/question/' + question.id}>Activity/Details View</a>
        </div>
      </div>
    );
  }
}
