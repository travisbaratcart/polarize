import * as React from 'react';

export namespace ExampleComponent {
  export interface Props {
    //empty
  }

  export interface State {
    /* empty */
  }
}

export class ExampleComponent extends React.Component<ExampleComponent.Props, ExampleComponent.State> {

  constructor(props?: ExampleComponent.Props, context?: any) {
    super(props, context);
  }

  render() {
    return (
      <div className="examplecomponent-container">
        Test content in example component
      </div>
    );
  }
}
