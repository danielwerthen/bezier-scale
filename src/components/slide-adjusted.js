import React from 'react';
import Slider from 'material-ui/Slider';
import Viewport from '../Viewport';

/**
 * The orientation of the slider can be reversed and rotated using the `axis` prop.
 */

const sliderWrapper = {
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
};

const sliderStyle = {
  height: 'calc(100% - 72px)',
};

export default class SlideAdjusted extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0.8,
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e, value) {
    this.setState({
      value,
    });
  }
  render() {
    const {
      children,
      height,
      width,
    } = this.props;
    return (<div>
      <Viewport height={height * this.state.value} width={width}>
        {children}
      </Viewport>
      <div style={sliderWrapper}>
        <Slider axis="y-reverse"
          style={sliderStyle}
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    </div>);
  }
}
