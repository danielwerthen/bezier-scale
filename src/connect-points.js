import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectCurve } from './connect-curve';
import Bezier from 'bezier-js';

function rearrange(arr) {
  return [
    ...arr.slice(4, 6),
    ...arr.slice(0, 2),
    ...arr.slice(2, 4),
    ...arr.slice(6, 8),
  ];
}

function selectBezier() {
  return createSelector(
    selectCurve(),
    ({ value }) =>
      new Bezier(rearrange(value)),
  );
}

function selectPoints() {
  return createSelector(
    selectBezier(),
    state => state.settings.bars,
    (bezier, bars) => ({
      points: bezier.getLUT(bars + 1),
    })
  );
}

export default connect(selectPoints);
