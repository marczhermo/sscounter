/* global window */
import ACTION_TYPES from './SSCounterActionTypes';

export function increment(props) {
  return (dispatch, getState) => {
    const store = getState();
    const fields = Object.assign({}, { ...store.Marcz.SSCounter.fields });
    const value = (fields[props.name] !== undefined) ? fields[props.name] : props.value;

    fields[props.name] = parseInt(value, 10) + 1;

    dispatch({
      type: ACTION_TYPES.INCREMENT,
      payload: { ...props, ...{ fields } },
    });
  };
}

export function initial(props) {
  return (dispatch, getState) => {
    const store = getState();
    const fields = Object.assign({}, { ...store.Marcz.SSCounter.fields });

    fields[props.name] = parseInt(props.value, 10);

    dispatch({
      type: ACTION_TYPES.INITIAL,
      payload: { ...props, ...{ fields } },
    });
  };
}

export function clean(props) {
  return (dispatch, getState) => {
    const store = getState();
    const fields = Object.assign({}, { ...store.Marcz.SSCounter.fields });

    fields[props.name] = undefined;

    dispatch({
      type: ACTION_TYPES.CLEAN,
      payload: { ...props, ...{ fields } },
    });
  };
}
