import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class ElementClass extends React.Component {
  constructor(props,context) {
    super(props,context)
    this.state = {
      inputValue: '',
      textareaValue: ''
    }
  }

  _inputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  _textareaChange(e) {
    this.setState({ textareaValue: e.target.value });
  }

  render() {
    let { inputValue, textareaValue } = this.state;
    return (
      <div>
        <input
          className = 'input'
          value = { inputValue }
          onChange = { (e) => this._inputChange(e) } />
        <br />
        <br />
        <textarea
          className = 'textarea'
          value = { textareaValue }
          onChange = { (e) => this._textareaChange(e) } />
      </div>
    );
  }
};

ReactDOM.render(
  <ElementClass />,
  document.getElementById('root')
);
