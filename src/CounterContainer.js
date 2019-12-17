import React, { Component } from "react";
import { connect } from "react-redux";

class CounterComponent extends Component {
  render() {
    const { count, dispatch } = this.props;
    return (
      <div>
        <p>{count}</p>
        <button onClick={() => dispatch({ type: "ADD" })}>add 1</button>
        <button onClick={() => dispatch({ type: "REMOVE" })}>remove 1</button>
        <button onClick={() => dispatch({ type: "ADDTEN" })}>add 10</button>
        <button onClick={() => dispatch({ type: "REMOVETEN" })}>
          remove 10
        </button>
        <button onClick={() => dispatch({ type: "DEFAULT" })}>default</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state
});

const CounterContainer = connect(mapStateToProps)(CounterComponent);

export default CounterContainer;
