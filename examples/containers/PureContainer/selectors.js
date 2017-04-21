import {createSelector} from 'reselect';

/**
 * Direct selector to the PureContainer state
 */
const selectPureContainer = (state) => state.get('pureContainer');

/**
* Other specific selectors
*/


/**
* Default selector used by PureContainer
*/
const makeSelectPureContainer = () => createSelector(
  selectPureContainer,
  (pureContainerState) => pureContainerState.toJS()
);

export default makeSelectPureContainer;

export {
  selectPureContainer,
  makeSelectPureContainer
};
