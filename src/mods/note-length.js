import _ from 'lodash';
import { single } from './_base';

export function noteLength({
  notes,
  notesPerBar = 32,
}) {

  function distance(a, { intersection = 1 } = {}) {
    const dt = intersection - a.intersection;
    return Math.round(dt * notesPerBar);
  }

  return notes.map((note, idx) => ({
    ...note,
    length: distance(note, notes[idx + 1]),
  }));
}

export default single(noteLength, 'notes');
