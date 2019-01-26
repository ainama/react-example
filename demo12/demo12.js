import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button';

class ElementClass extends React.Component {
  constructor(props,context) {
    super(props,context)
    this.state = {
      state: true
    }
  }

  _myClick() {
    let _state = this.state.state;
    this.setState({ state: !_state });
  }

  render() {
    let { state } = this.state;
    return (
      <div>
        <Button text = '按钮' onClick = { () => this._myClick() } />
        {
          state && (
            <div>state1: true</div>
          )
        }
        {
          !state && (
            <div>state1: false</div>
          )
        }
        {
          state
          ? (
            <div>state2: true</div>
          )
          : (
            <div>state2: false</div>
          )
        }
      </div>
    );
  }
};

ReactDOM.render(
  <ElementClass />,
  document.getElementById('root')
);
