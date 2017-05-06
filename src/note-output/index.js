import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectPoints } from '../connect-points';
import { noteToString } from '../Note';
import offsetize from '../offsetize';

function notify(p, notes, lineCount, bars) {
  const {
    x,
    y,
  } = p;
  const noteIndex = Math.floor(y * lineCount);
  const note = noteToString(
    notes[noteIndex % notes.length],
    Math.floor(noteIndex / notes.length)
  );
  const bar = Math.floor(x * bars);
  return {
    note,
    bar: bar === bars ? bar - 1 : bar,
  };
}

function selectNotes() {
  return createSelector(
    selectPoints(),
    state => state.settings.bars,
    state => state.settings.notes,
    state => state.settings.lineCount,
    ({ points }, bars, ...args) => ({
      notes: points.map(p => notify(p, ...args, bars)),
      bars,
    }),
  );
}

function NoteOutput({ notes, bars }) {
  const holder = Array(bars).fill();
  notes.forEach(({ note, bar }) => {
    holder[bar] = holder[bar] || [];
    holder[bar].push(note);
  });
  const preStyle = {
    flex: '1',
    padding: '0.5em',
    boxSizing: 'border-box',
    textAlign: 'left',
    borderRight: '1px dashed',
    minHeight: '2em',
    fontSize: '10px',
    verticalAlign: 'top',
  };
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
  };
  const itemStyle = {
    flex: '1',
  };
  function noteItemize(note) {
    return React.createElement('div',
      {
        style: itemStyle,
      },
      note);
  }
  function combine(ns) {
    if (!ns) {
      return null;
    }
    return React.createElement('div',
      {
        style: containerStyle,
      },
      ...ns.map(noteItemize));
  }
  const fn = holder
    .map(combine)
    .map(ns => (<div style={preStyle}>{ns}</div>));
  return React.createElement('div',
    {
      style: {
        width: 'calc(100% - 120px)',
        margin: '0 20px 0 100px',
        display: 'flex',
      },
    },
    fn);
}

export default offsetize(connect(selectNotes)(NoteOutput), 'div');
