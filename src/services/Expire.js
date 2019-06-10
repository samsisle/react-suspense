import React, { Component } from "react";
import { Spring } from "react-spring";

export default class Expire extends Component {
  state = { visible: true };

  componentWillReceiveProps = nextProps => {
    // reset the timer if children are changed
    if (nextProps.children !== this.props.children) {
      this.setTimer();
      this.setState({ visible: true });
    }
  };

  componentDidMount = () => this.setTimer();

  setTimer() {
    // clear any existing timer
    if (this._timer != null) {
      clearTimeout(this._timer);
    }
    if (this._timer != null) {
      clearTimeout(this._timeout);
    }

    // hide after `delay` milliseconds
    this._timer = setTimeout(
      function() {
        this.setState({ visible: false });
        this._timer = null;
      }.bind(this),
      2000
    );
    this._timeout = setTimeout(
      function() {
        this.props.setTest(null);
      }.bind(this),
      2000
    );
  }

  componentWillUnmount = () => {
    clearTimeout(this._timer);
    clearTimeout(this._timeout);
  };

  render() {
    return (
      this.state.visible && (
        <Spring
          from={{ opacity: 1 }}
          to={{ opacity: 0 }}
          reset={true}
          config={{ delay: 1500, duration: 200 }}
        >
          {props => <div style={props}>{this.props.children}</div>}
        </Spring>
      )
    );
  }
}
