import _ from 'lodash';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import propSelector from './propSelector';

import noteLines from './mods/note-lines';
import bezier from './mods/bezier';
import lineIntersections from './mods/line-intersections';

const mods = [
  bezier,
  noteLines,
  lineIntersections,
];

const mapState = propSelector({
  value: 'curves[0].value',
});

function merge(...propArgs) {
  const props = Object.assign.apply(null, [ {}, ...propArgs ]);
  const pass = mods.reduce((sum, fn) =>
    fn(sum),
    props);
  return pass;
}

export default connect(mapState, null, merge);
