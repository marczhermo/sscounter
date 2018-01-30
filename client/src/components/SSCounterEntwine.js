/* global document */
import jQuery from 'jquery';
import { schemaMerge } from 'lib/schemaFieldValues';
import SSCounter from '../components/SSCounter';

document.addEventListener('DOMContentLoaded', () => {
  jQuery.entwine('marcz', ($) => {
    $('.sscounter-component').entwine({
      Fields: {},

      onmatch() {
        this._super();

        this.refresh();
      },

      onunmatch() {
        this._super();

        const fields = this.getFields();
        const index = $(this).find('input').attr('name');

        if (fields[index] === undefined) return;

        fields[index].cleanUp();
        delete fields[index];
      },

      refresh() {
        const props = this.getAttributes();
        const fields = this.getFields();

        fields[props.name] = new SSCounter(props);
      },

      /**
       * Find the selected node and get attributes associated to attach the data to the form
       *
       * @returns {Object}
       */
      getAttributes() {
        const state = $('input.sscounter', this).data('state') || null;
        const schema = $('input.sscounter', this).data('schema') || null;

        return schemaMerge(schema, state);
      },
    });
  });
});
