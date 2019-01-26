import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class ElementClass extends React.Component {
  constructor(props,context) {
    super(props,context)
    this.state = {
      inputValue: '',
      numArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    }
  }

  _inputClick() {
    let _value = this.refs.input.value;
    this.setState({ inputValue: _value });
  }

  _selectClick(i) {
    let _style = this.refs['item'+i].style;
    _style.color = 'blue';
  }

  render() {
    let { inputValue, numArr } = this.state;
    return (
      <div>

        <div>
          <input className = 'input' ref = 'input' defaultValue = 'input' />
          点击按钮，获取输入框内容：{ inputValue }
          <div className = 'btn' onClick = { () => this._inputClick() }>按钮</div>
        </div>

        {
          numArr.map((item, i) => {
            return (
              <div
                key = { i }
                className = 'list-item'
                ref = { 'item' + i }
                onClick = { () => this._selectClick(i) }>
                { item }
              </div>
            )
          })
        }

      </div>
    );
  }
};

ReactDOM.render(
  <ElementClass />,
  document.getElementById('root')
);
