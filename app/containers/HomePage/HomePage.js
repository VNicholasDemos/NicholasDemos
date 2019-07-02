/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route } from 'react-router-dom';

import PrimaryAppBar from '../../components/AppBar/Primary';
import ViewContainer from '../../components/Layout/ViewContainer';
import ScrollView from '../../components/Layout/ScrollView';
import LayoutBody from '../../components/Layout/LayoutBody';
import { toggleDrawer } from '../LeftDrawer/actions';
import { loadRepos } from '../App/actions';
import { changeUsername } from '../GamePage/actions';
import GamePage from '../GamePage/GamePage';


export function mapDispatchToProps(dispatch) {
  return {
    toggleDrawer: () => dispatch(toggleDrawer()),
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    return (
      <ViewContainer>
        <ScrollView>
          <LayoutBody>
            <PrimaryAppBar
              toggleDrawer={this.props.toggleDrawer}
            />
            <Route exact path="/Game" component={GamePage} />
          </LayoutBody>
        </ScrollView>
      </ViewContainer>);
  }
}

HomePage.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};
  

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(HomePage);
