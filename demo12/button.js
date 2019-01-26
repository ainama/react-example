import React from 'react';
import './button.scss';

export default class Button extends React.Component {
  _btnClick() {
    this.props.onClick();
  }

  render() {
    let { text } = this.props;
    return (
      <div className = 'btn' onClick = { () => this._btnClick() }>
        { text }
      </div>
    );
  }
};
