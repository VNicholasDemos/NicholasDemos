/*
 *
 * LeftDrawer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  TOGGLE_DRAWER,
} from './constants';

export const initialState = fromJS({
  isDrawerOpen: false,
});

function leftDrawerReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return state.set('isDrawerOpen', !state.get('isDrawerOpen'));
    default:
      return state;
  }
}

export default leftDrawerReducer;
