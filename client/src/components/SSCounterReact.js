import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fieldHolder from 'components/FieldHolder/FieldHolder';
import * as SSCounterActions from '../state/SSCounterActions';
import root from 'window-or-global';

class SSCounterReact extends Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
    this.increment = this.increment.bind(this);
    this.listener = this.listener.bind(this);

    const store = root.ss.store;
    store.subscribe(this.listener);

    this.state = {
      value: 0
    };
  }

  componentWillMount() {
    this.props.actions.SSCounter.initial(this.props);
    this.updateLocalState();
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('componentWillReceiveProps', nextProps);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate', nextProps, nextState);
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('componentWillUpdate', [nextProps, nextState]);
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('componentDidUpdate', [prevProps, prevState]);
  // }

  componentWillUnmount() {
    this.props.actions.SSCounter.clean(this.props);
  }

  // componentDidCatch(error, info) {
  //   console.log('componentDidCatch', [error, info]);
  // }

  /**
   * Handles click of an item
   *
   * @param {Object} event
   */
  increment(event) {
    event.preventDefault();
    this.props.actions.SSCounter.increment(this.props);
  }

  updateLocalState() {
    const store = root.ss.store;
    const state = store.getState();
    const fieldName = this.props.name;

    if (state.Marcz.SSCounter.fields[fieldName] !== undefined) {
      this.setState({
        value: state.Marcz.SSCounter.fields[fieldName]
      });
    } else {
      this.setState({
        value: this.props.value
      });
    }
  }

  listener() {
    const store = root.ss.store;
    const state = store.getState();
    const fieldName = this.props.name;

    if (state.Marcz.SSCounter.fields[fieldName] !== this.state.value) {
      this.updateLocalState();
    }
  }

  render() {
    return (
      <div className="sscounter-react-component">
        <input
          type="hidden"
          className={this.props.extraClass}
          value={this.state.value}
          id={this.props.id}
          name={this.props.name}
        />
        <button className="btn btn-lg font-icon-plus" onClick={this.increment}>
          <span className="btn__title">{this.state.value}</span>
        </button>
      </div>
    );
  }
}

SSCounterReact.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    SSCounter: PropTypes.object,
  }),
};

function mapStateToProps(state, ownProps) {
  const id = ownProps.id;
  const field = state.ssMarco;
  const value = ownProps.value;
  const name = ownProps.name;

  return { ...field, id, value, name };
}

// Creates an actions to this.props eg. this.props.actions.SSCounter.function_name
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      SSCounter: bindActionCreators(SSCounterActions, dispatch),
    },
  };
}

const ConnectedSSCounter = connect(mapStateToProps, mapDispatchToProps)(SSCounterReact);

export {
  SSCounterReact as Component,
  ConnectedSSCounter,
};

export default fieldHolder(ConnectedSSCounter);
