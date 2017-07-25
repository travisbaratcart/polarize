import * as React from 'react';
import * as style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';
import { ExampleComponent, Card } from '../../components';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    // empty
  }

  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<App.Props, App.State> {

  render() {
    return (
      <div>
        <div className="app-heading">
          <h1>Pollarize</h1>
        </div>
        <div className="app-content">
          <Card
            cardNumber="1"
            question="What is your question for this?"
            description="The point of this question is to gauge your knowledge on nthis subject."
            optionType="radio"
            options={[{name:'asdasd',value:'asdasd'}]}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}
