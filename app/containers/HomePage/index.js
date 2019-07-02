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
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import withStyles from '@material-ui/core/styles/withStyles';
import {
  // makeSelectRepos,
  // makeSelectLoading,
  // makeSelectError,
  makeSelectGameFile,
  makeSelectGameInventory,
  makeSelectGameState,
  makeSelectGameMusic,
  makeSelectGameMusicId,
  makeSelectGameChangedAudio,
} from './selectors';
import PrimaryAppBar from '../../components/AppBar/Primary';
import ViewContainer from '../../components/Layout/ViewContainer';
import ScrollView from '../../components/Layout/ScrollView';
import LayoutBody from '../../components/Layout/LayoutBody';
import { toggleDrawer } from '../LeftDrawer/actions';
import { loadRepos } from '../App/actions';
import { changeUsername, getMusic, changeGameState, setaudioChanged } from './actions';
// import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import TextGame from '../../components/TextGame/TextGame';

const styles = () => ({
  body: {
    maxWidth: 700,
    textAlign: 'left',
    margin: 'auto',
    width: '70%',
    padding: 10,
    marginRight: '40%',
  },
});

const mapStateToProps = createStructuredSelector({
  GameState: makeSelectGameState(),
  GameFile: makeSelectGameFile(),
  GameInventory: makeSelectGameInventory(),
  GameMusic: makeSelectGameMusic(),
  GameMusicId: makeSelectGameMusicId(),
  ChangedAudio: makeSelectGameChangedAudio(),
});

export function mapDispatchToProps(dispatch) {
  return {
    setaudioChanged: () => dispatch(setaudioChanged()),
    changeGameState: state => dispatch(changeGameState(state)),
    getmusic: vid => dispatch(getMusic(vid)),
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
    const { GameState, GameFile, GameInventory, GameMusic, getmusic, ChangedAudio, classes } = this.props;

    return (
      <ViewContainer>
        <ScrollView>
          <LayoutBody>
            <PrimaryAppBar
              toggleDrawer={this.props.toggleDrawer}
            />
            <div className={classes.body}>
              <TextGame
                GameState={GameState}
                GameFile={GameFile}
                GameInventory={GameInventory}
                GameMusic={GameMusic}
                getmusic={getmusic}
                ChangedAudio={ChangedAudio}
                setaudioChanged={setaudioChanged}
                changeGameState={this.props.changeGameState}
              />
            </div>
          </LayoutBody>
        </ScrollView>
      </ViewContainer>);
  }
}

HomePage.propTypes = {
  GameState: PropTypes.object,
  GameFile: PropTypes.object,
  GameInventory: PropTypes.object,
  GameMusic: PropTypes.string,
  ChangedAudio: PropTypes.bool,
  changeGameState: PropTypes.func,
  toggleDrawer: PropTypes.func.isRequired,
  getmusic: PropTypes.func.isRequired,
  // setaudioChanged: PropTypes.func.isRequired,
  classes: PropTypes.object,
};
  
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withStyles(styles)(compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage));
