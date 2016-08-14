import _ from 'lodash';
import { single } from './_base';

function compare(a = {}, b = {}) {
  return a.note === b.note && a.octave === b.octave;
}

export function mergeNotes({
  notes,
}) {
  return _.flatMap(notes, (note, idx) => {
    if (compare(notes[idx - 1], note)) {
      return [];
    }
    return note;
  });

}

export default single(mergeNotes, 'notes');
