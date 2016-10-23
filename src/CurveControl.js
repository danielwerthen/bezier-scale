import React from 'react';
import Handle from './Handle';
import connect from './connect-handle';

const CHandle = connect(Handle);

export default class CurveControl extends React.PureComponent {
  render() {
    return (<g>
      <CHandle
        handleName="handle0Offset"
        anchorName="anchor0"
        color="#f2f010"
        {...this.props}
      />
      <CHandle
        handleName="handle0"
        anchorName="anchor0"
        color="#f21010"
        {...this.props}
      />
      <CHandle
        handleName="anchor0"
        color="#333"
        {...this.props}
      />
      <CHandle
        handleName="handle1Offset"
        anchorName="anchor1"
        color="#f2f010"
        {...this.props}
      />
      <CHandle
        handleName="handle1"
        anchorName="anchor1"
        color="#f21010"
        {...this.props}
      />
      <CHandle
        handleName="anchor1"
        color="#333"
        {...this.props}
      />
    </g>);
  }
}
