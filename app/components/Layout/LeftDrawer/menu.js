import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GestureIcon from '@material-ui/icons/Gesture';
// import AssessmentIcon from 'material-ui-icons/Assessment';
import Divider from '@material-ui/core/Divider';

import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = (theme) => ({
  mainDiv: {
    marginTop: 20,
  },
  menuItem: {
    fontSize: 14,
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
  activeLink: {
    color: 'red',
  },
});

class Menu extends Component { // eslint-disable-line react/prefer-stateless-function

  handleNavClick = (link) => {
    browserHistory.push(link);
    this.props.toggleDrawer();
  };

  render() {
    const { classes } = this.props;

    const pageMenuData = [
      { name: 'demos.fitness', text: 'Squatpump Fitness', icon: <AssignmentIcon />, link: '/fitness/' },
      { name: 'demos.platducks', text: 'Platinum Ducks', icon: <GestureIcon />, link: '/ducats/' },
      { name: 'demos.games', text: 'Christmas Witch', icon: <GestureIcon />, link: '/cwgame/' },
    ];

    const blogMenuData = [
      { name: 'demos.blog', text: 'James', icon: <DashboardIcon />, link: '/blog/James/' },
      { name: 'demos.blog', text: 'Grace', icon: <DashboardIcon />, link: '/blog/Grace/' },
      // { name: 'rms.search', text: 'Search', icon: <SearchIcon />, link: '/search' },
      // { name: 'rms.settings', text: 'Settings', icon: <SettingsIcon />, link: '/settings' },
    ];

    const devMenuData = [
      // { text: 'My Dev Page', icon: <SearchIcon />, link: '/devUrl' },
    ];

    const menueItem = (x) => (
      <MenuItem
        key={x.text}
        className={classes.menuItem}
        button
        onClick={() => this.handleNavClick(x.link)}
      >
        <ListItemIcon className={classes.icon}>
          {x.icon}
        </ListItemIcon>
        <ListItemText classes={{ primary: classes.primary }} inset primary={x.text} />
      </MenuItem>
    );

    function createMenuItems(data) {
      return data.map((x) => menueItem(x));
    }

    const pageItems = createMenuItems(pageMenuData);
    const blogItems = createMenuItems(blogMenuData);
    const devItems = createMenuItems(devMenuData);

    return (
      <div className={classes.mainDiv}>
        <MenuList
          subheader={<ListSubheader disableSticky>Blogs</ListSubheader>}
        >
          {blogItems}
          {devItems}
        </MenuList>
        <Divider />
        <MenuList
          subheader={<ListSubheader disableSticky>Pages</ListSubheader>}
        >
          {pageItems}
        </MenuList>
      </div>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func,
  // rights: PropTypes.any,
};

export default withStyles(styles)(Menu);
