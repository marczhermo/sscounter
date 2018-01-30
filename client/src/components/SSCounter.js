import jQuery from 'jquery';
import SSCounterValues from '../state/SSCounterValues';

class SSCounter {
  constructor(props = {}) {
    this.init(props);
  }

  init(props = {}) {
    this.props = props;
    this.input = jQuery(`#${this.props.id}`);
    this.button = this.input.next('button');
    this.button.on('click', this.click.bind(this));
    SSCounterValues.init(this.props.name, this.props.value);
  }

  click(e) {
    e.preventDefault();
    SSCounterValues.increment(this.props.name);
    const value = SSCounterValues.getValue(this.props.name);
    jQuery('span', this.button).text(value);
    this.input.val(value);
  }

  cleanUp() {
    this.button.off();
  }
}

export default SSCounter;
