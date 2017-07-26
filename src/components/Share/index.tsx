import * as React from 'react';

export namespace Share {
  export interface Props {
    //empty
  }

  export interface State {
    /* empty */
  }
}

export class Share extends React.Component<Share.Props, Share.State> {

  constructor(props?: Share.Props, context?: any) {
    super(props, context);
  }

  render() {
    return (
      <div className="share-container">
	    <div className="share-content">
		<div className="share-message detail-title-heading">Spread Awareness</div>
		  <div className="share-btn"><img src="../../assets/FB-f-Logo__blue_29.png"/></div>
		  <div className="share-btn"><img src="../../assets/Twitter_Logo_White_On_Blue.svg"/></div>
		  <div className="share-btn"><img src="../../assets/In-2C-28px-TM.png"/></div>
		</div>
      </div>
    );
  }
}
