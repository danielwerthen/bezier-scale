import _ from 'lodash';
import { single } from './_base';

export function lineIntersections({
  noteLines,
  bezier,
}) {
  const lines = _.flatMap(noteLines, noteLine => bezier.intersects(noteLine.line).map(intersection => ({
    ...noteLine,
    intersection,
  })));
  return _.sortBy(lines, 'intersection');
}

export default single(lineIntersections, 'notes');
