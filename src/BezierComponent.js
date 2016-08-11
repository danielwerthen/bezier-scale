import React from "react";

function interp (a, b, x) {
  return a * (1-x) + b * x;
}

export default class BezierComponent extends React.Component {
  constructor (props) {
    super(props);
    this.x = this.x.bind(this);
    this.y = this.y.bind(this);
  }
  x (value) {
    return Math.round(interp(this.props.xFrom, this.props.xTo, value));
  }

  y (value) {
    return Math.round(interp(this.props.yFrom, this.props.yTo, value));
  }
}
