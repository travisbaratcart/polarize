import * as React from 'react';
import { IChoiceResults } from '../../reducers';
import { CounterContainer } from '../CounterContainer';
import { getRandomNumberOfUsers } from '../../utils/random';

interface ISurveyAnswerProps {
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
      <section>
        <h1>{this.props.questionTitle}</h1>
        <h2>{this.props.questionDescription}</h2>
        <CounterContainer data={choiceResults} />
      </section>
    );
  }
};
