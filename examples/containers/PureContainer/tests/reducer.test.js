
import { fromJS } from 'immutable';
import pureContainerReducer from '../reducer';

describe('pureContainerReducer', () => {
  it('returns the initial state', () => {
    expect(pureContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
