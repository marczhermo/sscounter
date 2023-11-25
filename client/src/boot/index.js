/* eslint-disable */
import Injector from 'lib/Injector';
import SSCounterField from '../components/SSCounterField';

document.addEventListener('DOMContentLoaded', () => {
  // Register React Component
  Injector.component.registerMany({
    SSCounterField
  });
});
