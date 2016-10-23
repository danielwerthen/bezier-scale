import React from 'react';
import TextField from 'material-ui/TextField';
import pure from './pure';

const formStyle = {
  margin: '2em',
};

function isNumber(v) {
  return !isNaN(v);
}

import { compose, styles } from 'react-compose';

const Fieldset = compose(styles({ border: 0 }))('fieldset');

export default function Config({
  settings: {
    curveCount,
    beatsPerBar,
    bars,
    lowestNoteValue,
    lineCount,
    notes,
  },
  onChangePath,
}) {
  return (<form style={formStyle}>
    <Fieldset>
      <TextField
        defaultValue={curveCount}
        floatingLabelText="Curve count"
        onChange={onChangePath('curveCount',
            v => parseInt(v, 10),
            isNumber,
            v => v <= 10,
            v => v > 0)}
      />
    </Fieldset>
    <Fieldset>
      <TextField
        defaultValue={beatsPerBar}
        floatingLabelText="Beats per bar"
        onChange={onChangePath('beatsPerBar', v => parseInt(v, 10), isNumber)}
      />
    </Fieldset>
    <Fieldset>
      <TextField
        defaultValue={bars}
        floatingLabelText="Number of bars"
        onChange={onChangePath('bars', v => parseInt(v, 10), isNumber)}
      />
    </Fieldset>
    <Fieldset>
      <TextField
        defaultValue={lowestNoteValue}
        floatingLabelText="Lowest note value"
        onChange={onChangePath('lowestNoteValue', v => parseInt(v, 10), isNumber)}
      />
    </Fieldset>
    <Fieldset>
      <TextField
        defaultValue={lineCount}
        floatingLabelText="Line count"
        onChange={onChangePath('lineCount', v => parseInt(v, 10), isNumber)}
      />
    </Fieldset>
    <Fieldset>
      <TextField
        defaultValue={notes}
        floatingLabelText="Notes, (A,B,C...)"
        onChange={onChangePath('notes', v => v.split(','))}
      />
    </Fieldset>
  </form>);
}
