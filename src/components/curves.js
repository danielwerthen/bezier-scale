import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import BaseCurve from '../Curve';
import BasePoints from '../Points';
import connectCurve from '../connect-curve';
import connectPoints from '../connect-points';

const Curve = connectCurve(BaseCurve);
const Points = connectPoints(BasePoints);

function Curves({
  curveCount,
  ...props,
}) {
  const curves = Array(curveCount).fill().map((nil, id) =>
    id / curveCount);
  return React.createElement('g', {},
    ...curves.map(offset => [
      <Curve key={`curve for ${offset}`} offset={offset} {...props} />,
      <Points key={`points for ${offset}`} offset={offset} {...props} />
    ])
  );
}

Curves.defaultProps = {
  curveCount: 10,
};

const mapState = () => createSelector(
  state => state.settings.curveCount,
  curveCount => ({ curveCount })
);

export default connect(mapState)(Curves);
