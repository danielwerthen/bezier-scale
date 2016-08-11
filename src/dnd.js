import React from 'react';

export default function dnd(Component) {
  class Dnd extends React.Component {
    constructor() {
      super();
      this.state = {};
      this.events = {
        onMouseDown: this.handleMouseDown.bind(this),
        onMouseUp: this.handleMouseUp.bind(this),
        onMouseLeave: this.handleMouseUp.bind(this),
        onMouseMove: this.handleMouseMove.bind(this),
      };
    }
    handleMouseDown(e) {
      const {
        clientX,
        clientY,
      } = e;
      this.last = {
        x: clientX,
        y: clientY,
      };
    }
    handleMouseUp(e) {
      this.last = null;
    }
    handleMouseMove(e) {
      if (!this.last) {
        return;
      }
      const {
        onMove,
      } = this.props;
      const {
        clientX,
        clientY,
      } = e;
      const {
        x,
        y,
      } = this.last;
      if (onMove) onMove(
        clientX - x,
        clientY - y,
      );
      this.last = {
        x: clientX,
        y: clientY,
      };
    }
    render() {
      return (<Component
        {...this.props}
        {...this.events}
      />);
    }
  }

  const dn = Component.displayName || Component.name || 'Component';
  Dnd.displayName = `dnd(${dn})`;
  Dnd.defaultProps = {
    onMove: (x,y) => console.log(x,y),
  };
  Dnd.propTypes = {
    onMove: React.PropTypes.func.isRequired,
  };

  return Dnd;
}
