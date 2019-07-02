/*
 *
 * LeftDrawer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import makeSelectLeftDrawer from './selectors';
import LayoutLeftDrawer from '../../components/Layout/LeftDrawer';
import { toggleDrawer } from './actions';
// import * as appSelectors from '../App/selectors';
import reducer from './reducer';
import saga from './saga';

export class LeftDrawer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    return (
      <LayoutLeftDrawer
        isDrawerOpen={this.props.LeftDrawer.isDrawerOpen}
        toggleDrawer={this.props.toggleDrawer}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleDrawer: () => dispatch(toggleDrawer()),
  };
}

LeftDrawer.propTypes = {
  LeftDrawer: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  LeftDrawer: makeSelectLeftDrawer(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'leftDrawer', reducer });
const withSaga = injectSaga({ key: 'leftDrawer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LeftDrawer);
