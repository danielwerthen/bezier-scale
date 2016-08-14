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

function ConfigBase({
  beatsPerBar,
  bars,
  lowestNoteValue,
  lineCount,
  onChangePath,
}) {
  return (<form style={formStyle}>
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
  </form>);
}

ConfigBase.propTypes = {
  beatsPerBar: React.PropTypes.number,
  bars: React.PropTypes.number,
  lowestNoteValue: React.PropTypes.number,
  lineCount: React.PropTypes.number,
  onChangePath: React.PropTypes.func,
};

const Config = pure(ConfigBase);

export default function Cleanup(props) {
  return <Config {..._.pick(props, Object.keys(ConfigBase.propTypes))} />;
};
