import * as React from 'react';
import { Link } from 'react-router-dom';
import { ISurveyQuestion } from '../../reducers';

export namespace Card {
  export interface Props {
    cardNumber: number;
    question: ISurveyQuestion;
    optionType: string;
    answer: string;
    onChangeAnswer: (questionId: string, answer: string) => void;
    history?: any;
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

  getNavigateToQuestionDetailsFunc = (qid: string) => {
    return (e: any) => {
      event.preventDefault();
      this.context.router.history.push();
    }
  }

  render() {
    const { cardNumber, question, optionType } = this.props;
    var optionItems = question.options.map((option, optionNumber) => {
      return (
        <div className="options-list" key={optionNumber}>
          <input
            type="radio"
            name={option + question.title}
            id={option + question.title}
            value={option}
            checked={this.props.answer === option}
            onChange={this.changeAnswer} />
          <label htmlFor={option + question.title}>{option}</label>
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
          <Link to={'/question/' + question.id} className="activity-link">Activity/Details View</Link>
        </div>
      </div>
    );
  }
}
