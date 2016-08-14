import { single } from './_base';

export function noteLength({
  notes,
  notesPerBar,
  bars,
}) {

  function distance(a, { intersection = 1 } = {}) {
    const dt = intersection - a.intersection;
    return Math.round(dt * notesPerBar * bars);
  }

  return notes.map((note, idx) => ({
    ...note,
    length: distance(note, notes[idx + 1]),
  }));
}

export default single(noteLength, 'notes');
