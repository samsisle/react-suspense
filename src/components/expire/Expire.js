import React from "react";
import { Spring } from "react-spring/renderprops";

export default class Expire extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  componentWillReceiveProps(nextProps) {
    // reset the timer if children are changed
    if (nextProps.children !== this.props.children) {
      this.setTimer();
      this.setState({ visible: true });
    }
  }

  componentDidMount() {
    this.setTimer();
  }

  setTimer() {
    // clear any existing timer
    if (this._timer != null) {
      clearTimeout(this._timer);
    }

    // hide after `delay` milliseconds
    this._timer = setTimeout(
      function() {
        this.setState({ visible: false });
        this._timer = null;
      }.bind(this),
      2000
    );
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  render() {
    return this.state.visible ? (
      <Spring
        from={{ opacity: 1 }}
        to={{ opacity: 0 }}
        reset={true}
        config={{ delay: 1500, duration: 200 }}
      >
        {props => <div style={props}>{this.props.children}</div>}
      </Spring>
    ) : null;
  }
}
