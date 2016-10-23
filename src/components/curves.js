import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import BaseCurve from '../Curve';
import connectCurve from '../connect-curve';

const Curve = connectCurve(BaseCurve);

function Curves({
  curveCount,
  ...props,
}) {
  const curves = Array(curveCount).fill().map((nil, id) =>
    id / curveCount);
  return React.createElement('g', {}, ...curves.map(offset =>
    <Curve offset={offset} {...props} />));
}

Curves.defaultProps = {
  curveCount: 10,
};

const mapState = () => createSelector(
  state => state.settings.curveCount,
  curveCount => ({ curveCount })
);

export default connect(mapState)(Curves);
