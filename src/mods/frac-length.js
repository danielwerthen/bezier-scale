import { single } from './_base';

function gcd_rec(a, b) {
  if (b) {
      return gcd_rec(b, a % b);
  } else {
      return Math.abs(a);
  }
}

function getFracLength({ length }, notesPerBar) {
  if (length <= 0) {
    return '0';
  }
  const gcd = gcd_rec(length, notesPerBar);
  const upper = length / gcd;
  const lower = notesPerBar / gcd;
  const frac = (length / gcd) / (notesPerBar / gcd);
  if (frac % 1 === 0) {
    console.log(length, upper, lower);
    return '1';
  } else {
    return `${upper}/${lower}`;
  }
}

export function fracLength({
  notes,
  notesPerBar,
}) {
  return notes.map(note => ({
    ...note,
    fracLength: getFracLength(note, notesPerBar),
  }));
}

export default single(fracLength, 'notes');
