/* global document */
import Injector from 'lib/Injector';
import { combineReducers } from 'redux';
import SSCounterReducer from '../state/SSCounterReducer';
import SSCounterReact from '../components/SSCounterReact';

document.addEventListener('DOMContentLoaded', () => {
  // Register Reducer
  Injector.reducer.register(
    'Marcz', // sort of module namespace
    combineReducers({
      SSCounter: SSCounterReducer, // store reference index
    })
  );

  // Register React Component
  Injector.component.register('SSCounterReact', SSCounterReact);
});
