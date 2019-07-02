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
  makeSelectGameFile,
  makeSelectGameInventory,
  makeSelectGameState,
  makeSelectGameMusic,
  makeSelectGameMusicId,
  makeSelectGameChangedAudio,
} from './selectors';
import { getMusic, changeGameState, setaudioChanged } from './actions';
import reducer from './reducer';
import saga from './saga';
import TextGame from '../../components/TextGame/TextGame';
import AudioPlayer from '../../components/AudioPlayer';

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
  };
}

/* eslint-disable react/prefer-stateless-function */
export const GamePage = ({changeGameState, setaudioChanged, GameState, GameFile, GameInventory, GameMusic, GameMusicId, getmusic, ChangedAudio, classes}) => ( //eslint-disable-line
  <div className={classes.body}>
    <TextGame
      GameInventory={GameInventory}
      GameFile={GameFile}
      GameState={GameState}
      changeGameState={changeGameState}
      GameMusicId={GameMusicId}
      getmusic={getmusic}
    />
    <AudioPlayer
      changedAudio = {ChangedAudio}
      GameMusic = {GameMusic}
      setaudioChanged = {setaudioChanged}
    />
  </div>
);

GamePage.propTypes = {
  GameState: PropTypes.object,
  GameFile: PropTypes.object,
  GameInventory: PropTypes.object,
  GameMusic: PropTypes.string,
  GameMusicId: PropTypes.string,
  ChangedAudio: PropTypes.bool,
  changeGameState: PropTypes.func,
  getmusic: PropTypes.func.isRequired,
  setaudioChanged: PropTypes.func.isRequired,
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
)(GamePage));
