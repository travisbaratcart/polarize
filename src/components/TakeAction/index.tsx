import * as React from 'react';

export namespace TakeAction {
  export interface Props {
    //empty
  }

  export interface State {
    /* empty */
  }
}

export class TakeAction extends React.Component<TakeAction.Props, TakeAction.State> {

  constructor(props?: TakeAction.Props, context?: any) {
    super(props, context);
  }

  render() {
    return (
      <div className="take-action-container">
	    <div className="take-action-content">
		<div className="take-action-message detail-title-heading">Get Involved</div>
		  <div className="actions-container">
		     <div className="take-action-action">
		    <div className="take-action-icon"><img src="../../assets/document.svg"/></div>
		    <div className="detail-title">Start A Petition</div>
		  </div>
		  <div className="take-action-action">
		    <div className="take-action-icon"><img src="../../assets/phone.svg"/></div>
		    <div className="detail-title">Contact Your Representative</div>
		  </div>
		  </div>
		</div>
      </div>
    );
  }
}
