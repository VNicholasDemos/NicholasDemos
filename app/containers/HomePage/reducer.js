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

import { CHANGE_USERNAME, GET_MUSIC, GET_MUSIC_SUCCEEDED } from './constants';

// The initial state of the App
export const initialState = fromJS({
  username: '',
  MusicId: '',
  GameMusic: '',
  GameState: {
    CurrentActionId: 10,
    VariableStates: [
      {
        Name: 'IsInTheFuture',
        Value: false,
      },
      {
        Name: 'PortalExists',
        Value: false,
      },
      {
        Name: 'HasSword',
        Value: false,
      },
      {
        Name: 'HasPortalGun',
        Value: true,
      },
      {
        Name: 'HasSuperStrength',
        Value: true,
      },
      {
        Name: 'SwordInRoom',
        Value: true,
      },
    ],
  },
  GameInventory: {
    Items: [
      {
        Id: 1,
        GameVariable: 'HasSword',
        Description: 'A glowing sword',
      },
      {
        Id: 2,
        GameVariable: 'HasPortalGun',
        Description: 'A portal gun',
      },
    ],
  },
  GameFile: {
    Actions: [
      {
        ID: 40,
        ActionStates: [
          {
            StateID: 1,
            ContigentOn: [],
            ResponseText:
              'A blast of green fire erupts from the end of the portal gun, throwing your wrist backwards! Fortunately, it only hits your broom closet. The space where the closet door once stood is now a six foot wide glowing portal.',
            ActionLinks: [
              {
                ContigentOn: [],
                SetParameters: [
                  {
                    Name: 'PortalExists',
                    Value: true,
                  },
                ],
                LinkID: 'Back',
                LinkDesc: 'I never liked that closet anyway.',
              },
            ],
          },
        ],
      },
      {
        ID: 10,
        ActionStates: [
          {
            StateID: 1,
            ContigentOn: [
              {
                Name: 'IsInTheFuture',
                Value: true,
              },
            ],
            ResponseText:
              'You find yourself in the living room. It seems as though thirty years have passed. Mildew drips from the dank kitchen wall, a legacy of a roof long since caved in. One of the front windows is broken, the other covered with the accumulated dust of ages. Your feet sink into the remains of the rotted carpet, and it is difficult not to gag from the stench. { "Vame":"SwordInRoom", "Value":There is a glowing sword embedded halfway into the floor, in the center of the room."} { "Name": "PortalExists", "Value":"There is a six foot wide glowing green portal where your broom closet should be."} ',
            ActionLinks: [
              {
                ContigentOn: [],
                LinkID: 80,
                LinkDesc: 'Go through the door to the kitchen',
              },
              {
                ContigentOn: [],
                LinkID: 90,
                LinkDesc: 'Exit through the front door',
              },
              {
                ContigentOn: [
                  {
                    Name: 'PortalExists',
                    Value: true,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'IsInTheFuture',
                    Value: false,
                  },
                ],
                LinkID: 10,
                LinkDesc: 'Step back into the mysterious glowing portal',
              },
              {
                ContigentOn: [],
                LinkID: 20,
                LinkDesc: 'Look out the window',
              },
              {
                ContigentOn: [
                  {
                    Name: 'SwordInRoom',
                    Value: true,
                  },
                ],
                LinkID: 30,
                LinkDesc: 'Take the sword',
              },
            ],
          },
          {
            StateID: 2,
            ContigentOn: [
              {
                Name: 'IsInTheFuture',
                Value: false,
              },
            ],
            ResponseText:
              'You are in your living room. Here is a generic description of your living room. { "Name": "PortalExists", "Value":"There is a six foot wide glowing green portal where your broom closet should be."} ',
            SetParameters: [],
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'HasPortalGun',
                    Value: true,
                  },
                ],
                SetParameters: [],
                LinkID: 40,
                LinkDesc:
                  'Pull the trigger on the gun. Just to see what happens.',
              },
              {
                ContigentOn: [],
                SetParameters: [],
                LinkID: 80,
                LinkDesc: 'Go through the door to the kitchen',
              },
              {
                ContigentOn: [],
                SetParameters: [],
                LinkID: 90,
                LinkDesc: 'Exit through the front door',
              },
              {
                ContigentOn: [
                  {
                    Name: 'PortalExists',
                    Value: true,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'IsInTheFuture',
                    Value: true,
                  },
                ],
                LinkID: 10,
                LinkDesc: 'Step into the mysterious glowing portal',
              },
              {
                ContigentOn: [],
                LinkID: 20,
                LinkDesc: 'Look out the window',
              },
            ],
          },
        ],
      },
    ],
  },
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MUSIC:
      return state.set('MusicId', action.name);
    case GET_MUSIC_SUCCEEDED:
      console.log(action.getMusic);
      return state.set('GameMusic', action.getMusic);
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return state.set('username', action.name.replace(/@/gi, ''));
    default:
      return state;
  }
}

export default homeReducer;
