/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';
import initialGameState from './gameData';
import { CHANGE_USERNAME, GET_MUSIC, GET_MUSIC_SUCCEEDED, UPDATE_GAME_STATE, SET_AUDIO_CHANGED } from './constants';
import findMatchingNameInArray from '../../utils/helpers/findMatchingNameInArray'

// The initial state of the App
export const initialState = initialGameState;

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_GAME_STATE:
      // console.log(action.state);
      // console.log(state.get('GameState').toJS());
      const LocalGameState = state.get('GameState').toJS(); //eslint-disable-line
      console.log(action);
      
      if(action.state.LinkID==='Back') {
        LocalGameState.CurrentActionId = LocalGameState.PrevActionId;
      } else {
        LocalGameState.PrevActionId = LocalGameState.CurrentActionId;
        LocalGameState.CurrentActionId = action.state.LinkID;
      }
      if(action.state.SetParameters !== undefined) {
        if(action.state.SetParameters.length > 0) {
          action.state.SetParameters.forEach(param=>{
            const variableIndex = findMatchingNameInArray(param.Name, LocalGameState.VariableStates);
            if(variableIndex!==null){
              LocalGameState.VariableStates[variableIndex].Value = param.Value;
            }
          });
        }
      }
      return state.set('GameState', fromJS(LocalGameState));

    case SET_AUDIO_CHANGED:
      return state.set ('ChangedAudio', false);
    case GET_MUSIC:
      const audioState = state.set ('ChangedAudio', false); //eslint-disable-line
      return audioState.set('MusicId', action.name);
    case GET_MUSIC_SUCCEEDED:
      // console.log(action.getMusic);
      const newState = state.set ('ChangedAudio', true); //eslint-disable-line
      return newState.set('GameMusic', action.getMusic);
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return state.set('username', action.name.replace(/@/gi, ''));
    default:
      return state;
  }
}

export default homeReducer;
