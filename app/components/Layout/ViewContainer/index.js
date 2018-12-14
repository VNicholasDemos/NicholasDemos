/**
*
* ViewContainer
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // position: 'absolute',
    height: '100%',
    width: '100%',
    background: 'white',
  },
});

const ViewContainer = (props) => {
  const {
    children,
    classes,
  } = props;

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

ViewContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewContainer);
