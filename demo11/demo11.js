import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class ElementClass extends React.Component {
  constructor(props,context) {
    super(props,context)
    this.state = {
      count: 0
    }
  }

  _myClick(count) {
    count += 1;
    this.setState({ count });
  }

  render() {
    let { text, count } = this.state;
    return (
      <div>
        <div className = 'btn' onClick = { () => this._myClick(count) }>按钮</div>
        您点击了按钮 { count } 次
      </div>
    );
  }
};

ReactDOM.render(
  <ElementClass />,
  document.getElementById('root')
);
