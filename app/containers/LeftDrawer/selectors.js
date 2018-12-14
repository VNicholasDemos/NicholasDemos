import { createSelector } from 'reselect';

/**
 * Direct selector to the leftDrawer state domain
 */
const selectLeftDrawerDomain = () => (state) => state.get('leftDrawer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LeftDrawer
 */

const makeSelectLeftDrawer = () => createSelector(
  selectLeftDrawerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectLeftDrawer;
export {
  selectLeftDrawerDomain,
};
