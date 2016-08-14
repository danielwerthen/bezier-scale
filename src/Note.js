import React from 'react';

function printOctave(octave) {
  if (!octave) {
    return '';
  }
  return `${octave > 0 ? '+' : '-'}${octave}`
}

export function noteToString(note, octave, length) {
  return `${note}${printOctave(octave)}${length || ''}`;
}

function Note({
  note,
  octave,
  fracLength,
}, key) {
  const length = fracLength !== undefined && ` – ${fracLength}`;
  return (<span style={{ margin: '0.5em' }} key={key}>
    {noteToString(note, octave, length)}
  </span>);
}

export default Note;
