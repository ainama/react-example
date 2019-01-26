import React from 'react';
import ReactDOM from 'react-dom';

const userInfo = {
  name: 'Harper',
  gender: '男',
  age: 23,
  department: '前端'
};

function getElement() {
  return (
    <div>
      <div>类型：function</div>
      <div>姓名：{ userInfo.name }</div>
      <div>性别：{ userInfo.gender }</div>
      <div>年龄：{ userInfo.age }</div>
      <div>部门：{ userInfo.department }</div>
    </div>
  );
};

ReactDOM.render(
  getElement(),
  document.getElementById('root')
);
