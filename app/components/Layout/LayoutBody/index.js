/**
*
* LayoutBody
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
  root: {
    margin: '90px 0 38px',
  },
  rootResponsive: {
    '@media (min-width: 600px)': {
      width: 'auto',
      marginLeft: 20,
      marginRight: 20,
    },
    '@media (min-width: 920px)': {

      marginLeft: 20,
      marginRight: 20,
    },
  },
  rootFullHeight: {
    height: '100%',
    marginBottom: 0,
  },
});

const LayoutBody = (props) => {
  const {
    children,
    classes,
    fullHeight,
    fullWidth,
    style,
    ...other
  } = props;

  return (
    <div
      className={classNames(classes.root, {
        [classes.rootResponsive]: !fullWidth,
        [classes.rootFullHeight]: fullHeight,
      })}
      style={style}
      {...other}
    >
      {children}
    </div>
  );
};

LayoutBody.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  fullHeight: PropTypes.bool,
  fullWidth: PropTypes.bool,
  style: PropTypes.object,
};

LayoutBody.defaultProps = {
  fullHeight: false,
  fullWidth: false,
};

export default withStyles(styles)(LayoutBody);
