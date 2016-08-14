import React from 'react';

function printOctave(octave) {
  if (!octave) {
    return '';
  }
  return `${octave > 0 ? '+' : '-'}${octave}`
}

function NoteOutput({
  notes,
}) {
  const print = notes.map(({ note, octave, length }) =>
    `${note}${printOctave(octave)} – ${length}`);
  return (<div>
    <p>{print.join(' ')}</p>
  </div>);
}

export default NoteOutput;
