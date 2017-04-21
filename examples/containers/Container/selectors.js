import {createSelector} from 'reselect';

/**
 * Direct selector to the Container state
 */
const selectContainer = (state) => state.get('container');

/**
* Other specific selectors
*/


/**
* Default selector used by Container
*/
const makeSelectContainer = () => createSelector(
  selectContainer,
  (containerState) => containerState.toJS()
);

export default makeSelectContainer;

export {
  selectContainer,
  makeSelectContainer
};
