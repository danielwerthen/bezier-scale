import React from 'react';

function printOctave(octave) {
  if (!octave) {
    return '';
  }
  return `${octave > 0 ? '+' : '-'}${octave}`
}

function NoteOutput({
  noteLines,
}) {
  const notes = noteLines.map(({ note, octave }) =>
    `${note}${printOctave(octave)}`);
  return (<div>
    <p>{notes.join(' ')}</p>
  </div>);
}

export default NoteOutput;
