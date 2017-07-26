import * as React from 'react';
import { IChoiceResults } from '../../reducers';
import { CounterContainer } from '../CounterContainer';
import { getRandomNumberOfUsers } from '../../utils/random';

interface ISurveyAnswerProps {
  questionNumber: number;
  questionTitle: string;
  questionDescription: string;
  questionOptions: string[];
}

export class SurveyAnswer extends React.Component<ISurveyAnswerProps, {}> {
  public render() {
    let totalRemainingUsers = 10000;

    const choiceResults: IChoiceResults = {
      results: this.props.questionOptions.map((option, questionIndex) => {
        const isLastQuestion = questionIndex === this.props.questionOptions.length - 1;

        const numberOfUsersForChoice = isLastQuestion
          ? totalRemainingUsers
          : getRandomNumberOfUsers(totalRemainingUsers);

        totalRemainingUsers -= numberOfUsersForChoice;

        return {
          choiceName: option,
          choiceCount: numberOfUsersForChoice
        };
      })
    };

    return (
      <section className="surveyanswer-container">
        <div className="card-container">
          <span className="card-no">{this.props.questionNumber}</span>
          <div className="heading">
            <h1>{this.props.questionTitle}</h1>
          </div>
          <div className="content">
            <p>{this.props.questionDescription}</p>
            <CounterContainer data={choiceResults} />
          </div>
        </div>
      </section>
    );
  }
};
