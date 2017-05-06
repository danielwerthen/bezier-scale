import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const floatStyle = {
  position: 'fixed',
  right: 25,
  bottom: 25,
};

export default class RightDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <FloatingActionButton style={floatStyle} onTouchTap={this.handleToggle}>
          <ContentAdd />
        </FloatingActionButton>
        <Drawer
          docked={false}
          width={360}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Close</MenuItem>
          {this.props.children}
        </Drawer>
      </div>
    );
  }
}
