import React from 'react';

export default function autoSize(Component) {
  class AutoSize extends React.Component {
    constructor() {
      super();
      this.state = {};
      this.registerContainer = this.registerContainer.bind(this);
      this.resize = this.resize.bind(this);
    }
    registerContainer(el) {
      if (!el) {
        this.container = {};
        window.removeEventListener('resize', this.resize);
        return;
      }
      this.container = el;
      this.resize();
      window.addEventListener('resize', this.resize);
    }
    resize() {
      const {
        width,
        height,
      } = this.container.getBoundingClientRect();
      this.setState({
        width,
        height,
      });
    }
    render() {
      return (<div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}
        ref={this.registerContainer}
      >
        <Component
          {...this.props}
          {...this.state}
        />
      </div>);
    }
  }
  return AutoSize;
};
