import React from 'react';
import BezierComponent from './BezierComponent';

export default class Points extends BezierComponent {

  renderCircle = ({ x, y }) => {
    const {
      radius,
      color,
    } = this.props;
    return (<circle
      cx={this.x(x)}
      cy={this.y(y)}
      r={radius}
      fill={color}
    />);
  }
  render() {
    const {
      points,
    } = this.props;
    return React.createElement('g', {},
      ...points.map(this.renderCircle));
  }
}

Points.defaultProps = {
  color: '#333',
  radius: 3,
};
