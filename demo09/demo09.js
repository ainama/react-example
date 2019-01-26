import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';

class ElementClass extends React.Component {
  constructor(props,context) {
    super(props,context)
    this.state = {
      users: ['zhangsan', 'lisi', 'wangwu', 'zhaoliu']
    }
  }

  render() {
    return (
      <div>
        {
          this.state.users.map((item, i) => {
            return (
              <Welcome
                key = { i }
                name = { item } />
            );
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
