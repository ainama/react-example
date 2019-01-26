import React from 'react';

export default class Welcome extends React.Component {
  render() {
    let { name } = this.props;
    return (
      <h2>hello, { name }</h2>
    );
  }
};
