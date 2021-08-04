import React from 'react';

export default class HelloMessage extends React.Component {
  render() {
    return <h2>{this.props.message} success!</h2>;
  }
}
