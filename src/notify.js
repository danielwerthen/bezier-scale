import _ from 'lodash';
import { connect } from 'react-redux';
import propSelector from './propSelector';
import { set } from './redux';

import notesPerBar from './mods/notes-per-bar';
import noteLines from './mods/note-lines';
import bezier from './mods/bezier';
import notes from './mods/notes';
import mergeNotes from './mods/merge-notes';
import noteLength from './mods/note-length';
import fracLength from './mods/frac-length';

const mods = [
  notesPerBar,
  bezier,
  noteLines,
  notes,
  mergeNotes,
  noteLength,
  fracLength,
];

const mapState = propSelector({
  value: 'curves[0].value',
  beatsPerBar: 'beatsPerBar',
  lowestNoteValue: 'lowestNoteValue',
  bars: 'bars',
  lineCount: 'lineCount',
});

function mapDispatch(dispatch) {
  return {
    onMoveHandle(index, x, y) {
      dispatch(set({
        [`curves[0].value[${index * 2}]`]: x,
        [`curves[0].value[${index * 2 + 1}]`]: y,
      }));
    },
    onChangePath(path, map = i => i, predicate = () => true) {
      return _.throttle((e, value) => {
        const v = map(value || _.get(e, 'target.value', e));
        if (!predicate(v)) {
          return;
        }
        dispatch(set({
          [path]: v,
        }));
      }, 100, {
        leading: true,
        trailing: true,
      });
    },
  };
}

function merge(...propArgs) {
  const props = Object.assign.apply(null, [ {}, ...propArgs ]);
  const pass = mods.reduce((sum, fn) =>
    fn(sum),
    props);
  return pass;
}

export default connect(mapState, mapDispatch, merge);
