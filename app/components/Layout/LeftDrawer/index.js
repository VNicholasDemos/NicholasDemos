import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Header from './header';
import Menu from './menu';

const styles = () => ({
  root: {
    zIndex: '1350',
  },
});

const LayoutLeftDrawer = (props) => {
  const { isDrawerOpen, toggleDrawer, classes } = props;

  return (
    <Drawer
      open={isDrawerOpen}
      onClose={toggleDrawer}
      className={classes.root}
    >
      <Header
        title="Nicholas.org Demos"
        // userName={associateEmail}
        // fullName={associateName}
        // image={associateImage}
        handleChangeRequestNavDrawer={toggleDrawer}
      />
      <Menu
        toggleDrawer={toggleDrawer}
        // rights={rights}
      />
    </Drawer>
  );
};

LayoutLeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  // associateName: PropTypes.string,
  // associateEmail: PropTypes.string,
  // associateImage: PropTypes.string,
  // rights: PropTypes.any,
};

export default withStyles(styles)(LayoutLeftDrawer);
