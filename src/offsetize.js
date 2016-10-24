import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

export default function offsetize(Component, Wrapper) {
  function Curves({
    curveCount,
    ...props,
  }) {
    const curves = Array(curveCount).fill().map((nil, id) =>
      id / curveCount);
    return React.createElement(Wrapper, {},
      ...curves.map(offset =>
        <Component offset={offset} {...props} />,
      )
    );
  }

  Curves.defaultProps = {
    curveCount: 10,
  };

  const mapState = () => createSelector(
    state => state.settings.curveCount,
    curveCount => ({ curveCount })
  );

  return connect(mapState)(Curves);
}
