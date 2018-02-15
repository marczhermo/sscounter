/* global window */
import deepFreeze from 'deep-freeze-strict';
import ACTION_TYPES from './SSCounterActionTypes';

const initialState = deepFreeze({
  fields: {}
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.INITIAL:
      return deepFreeze({ fields: action.payload.fields });
    case ACTION_TYPES.INCREMENT:
      return deepFreeze({ fields: action.payload.fields });
    case ACTION_TYPES.CLEAN:
      return { fields: {} };
    default:
      return state;
  }
}

export default reducer;
