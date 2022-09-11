import types from '../actions/types';
import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
});

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case types.setLoading:
      return state.setIn(['loading'], action.payload);
    default:
      return state;
  }
}
