import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

class ElementClass extends React.Component {
  render() {
    return (
      <div>
        <h2>Time</h2>
        <Clock />
      </div>
    );
  }
};

ReactDOM.render(
  <ElementClass />,
  document.getElementById('root')
);
