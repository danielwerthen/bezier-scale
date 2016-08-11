import React from 'react';
import { connect } from 'react-redux';
import propSelector from './propSelector';
import { set } from './redux';
import bezierEasing from 'bezier-easing';

function NoteOutput({
  value,
}) {
  console.log(value);
  const easing = bezierEasing.apply(null, value);
  return (<div>
    {_.range(0, 10).map(i => <div>{easing(i / 10)}</div>)}
  </div>);
}

const mapState = propSelector({
  value: 'curves[0].value',
});

export default connect(mapState)(NoteOutput);
