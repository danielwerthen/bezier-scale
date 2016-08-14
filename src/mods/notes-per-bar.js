import { single } from './_base';

export function notesPerBar({
  beatsPerBar,
  lowestNoteValue,
}) {
  return beatsPerBar * (1 / lowestNoteValue);
}
export default single(notesPerBar);
