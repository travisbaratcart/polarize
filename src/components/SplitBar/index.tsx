import * as React from 'react';

export namespace SplitBar {
  export interface Props {
    data: any
  }

  export interface State {
    /* empty */
  }
}

export class SplitBar extends React.Component<SplitBar.Props, SplitBar.State> {

  constructor(props?: SplitBar.Props, context?: any) {
    super(props, context);
  }

  render() {
    const { data } = this.props;
    var d = data.democrats,
        r = data.republicans,
        i = data.independents,
        u = data.unidentified;
    var total = d + r + i + u;


    return (
      <div className="splitbar-container">
        <div style={{width: (d/total)*100 + '%'}} className="democrats">
          <span>Democrats</span>
        </div>
        <div style={{width: (r/total)*100 + '%'}} className="republicans">
          <span>Republicans</span>
        </div>
        <div style={{width: (i/total)*100 + '%'}} className="independents">
          <span>Independents</span>
        </div>
        <div style={{width: (u/total)*100 + '%'}} className="unidentified">
          <span>&nbsp;</span>
        </div>
      </div>
    );
  }
}
