/* global window */
// import deepFreeze from 'deep-freeze-strict';
import ACTION_TYPES from './SSCounterActionTypes';

const initialState = deepFreeze({
  fields: {},
});

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
