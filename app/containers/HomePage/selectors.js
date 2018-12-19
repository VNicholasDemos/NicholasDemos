/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectUsername = () =>
  createSelector(selectHome, homeState => homeState.get('username'));

const makeSelectGameState = () =>
  createSelector(selectHome, homeState => homeState.get('GameState').toJS());

const makeSelectGameInventory = () =>
  createSelector(selectHome, homeState => homeState.get('GameInventory').toJS());

const makeSelectGameFile = () =>
  createSelector(selectHome, homeState => homeState.get('GameFile').toJS());

const makeSelectGameMusic = () =>
  createSelector(selectHome, homeState => homeState.get('GameMusic'));

const makeSelectGameMusicId = () =>
  createSelector(selectHome, homeState => homeState.get('MusicId'));

const makeSelectGameChangedAudio = () =>
  createSelector(selectHome, homeState => homeState.get('ChangedAudio'));

export { selectHome, makeSelectUsername, makeSelectGameState, makeSelectGameInventory, makeSelectGameFile, makeSelectGameMusic, makeSelectGameMusicId, makeSelectGameChangedAudio };
