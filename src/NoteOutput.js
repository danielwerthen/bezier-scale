import React from 'react';
import Note from './Note';

function NoteOutput({
  notes,
}) {
  const print = notes.map(Note);
  return (<div>
    <p>{print}</p>
  </div>);
}

export default NoteOutput;
