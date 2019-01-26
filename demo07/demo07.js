import React from 'react';
import ReactDOM from 'react-dom';

const userInfo = {
  name: 'Harper',
  gender: '男',
  age: 23,
  department: '前端'
};

const styles = {
  textStyle: {
    fontSize: 14,
    color: '#abc'
  }
};

class ElementClass extends React.Component {
  render() {
    return (
      <div style = { styles.textStyle }>
        <div>姓名：{ userInfo.name }</div>
        <div>性别：{ userInfo.gender }</div>
        <div>年龄：{ userInfo.age }</div>
        <div>部门：{ userInfo.department }</div>
      </div>
    );
  }
};

ReactDOM.render(
  <ElementClass />,
  document.getElementById('root')
);
