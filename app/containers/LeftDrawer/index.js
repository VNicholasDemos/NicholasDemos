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
    // console.log('Associate Name');
    // console.log(this.props.AssociateName);

    return (
      <LayoutLeftDrawer
        isDrawerOpen={this.props.LeftDrawer.isDrawerOpen}
        toggleDrawer={this.props.toggleDrawer}
        // userEmail={this.props.AssociateName}
        // userImage={this.props.AssociateImage}
        // rights={this.props.Rights}
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
  // AssociateName: PropTypes.string,
  // AssociateEmail: PropTypes.string,
  // AssociateImage: PropTypes.string,
  // Rights: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  LeftDrawer: makeSelectLeftDrawer(),
  // userEmail: appSelectors.makeSelectLoginAssociateEmail(),
  // userImage: appSelectors.makeSelectLoginAssociateImage(),
  // Rights: appSelectors.makeSelectLoginAssociateRights(),
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
