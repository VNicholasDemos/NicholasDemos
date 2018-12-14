/**
*
* AppBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import FontAwesome from 'react-fontawesome';
import IconButton from '@material-ui/core/IconButton';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';


const styles = () => ({
  root: {
    flex: 1,
  },
  menuIcon: {
    color: '#000',
  },
  appBar: {
    height: 70,
    boxShadow: '0 0 0 0',
    backgroundColor: '#fff',
  },
});

class PrimaryAppBar extends React.Component {
  state = {
    // refreshLabel: '',
  };

  render() {
    const { classes, toggleDrawer } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          className={classes.appBar}
        >
          <Toolbar>
            <IconButton
              className={classes.menuIcon}
              aria-label="Menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

PrimaryAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default withStyles(styles)(PrimaryAppBar);
