import React from 'react';

export default function dnd(Component) {
  class Dnd extends React.Component {
    constructor() {
      super();
      this.state = {};
      this.handleMouseDown = this.handleMouseDown.bind(this);
      this.handleMouseUp = this.handleMouseUp.bind(this);
      this.handleMouseMove = this.handleMouseMove.bind(this);
    }
    componentWillUnmount() {
      this.setdown();
    }
    setup() {
      window.addEventListener('mouseup', this.handleMouseUp);
      window.addEventListener('mouseleave', this.handleMouseLeave);
      window.addEventListener('mousemove', this.handleMouseMove);
    }
    setdown() {
      window.removeEventListener('mouseup', this.handleMouseUp);
      window.removeEventListener('mouseleave', this.handleMouseLeave);
      window.removeEventListener('mousemove', this.handleMouseMove);
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
      this.setup();
      e.preventDefault();
      e.stopPropagation();
    }
    handleMouseUp(e) {
      this.last = null;
      this.setdown();
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
        onMouseDown={this.handleMouseDown}
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
