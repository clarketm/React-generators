
import { fromJS } from 'immutable';
import containerReducer from '../reducer';

describe('containerReducer', () => {
  it('returns the initial state', () => {
    expect(containerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
