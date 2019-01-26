import React from 'react';
import { Link } from 'react-router-dom'
import classnames from 'classnames';

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      demos: [
        { folder: 'Demo01', theme: 'Hello world!' },
        { folder: 'Demo02', theme: '变量1' },
        { folder: 'Demo03', theme: '变量2' },
        { folder: 'Demo04', theme: 'function' },
        { folder: 'Demo05', theme: 'function[es6]' },
        { folder: 'Demo06', theme: 'class' },
        { folder: 'Demo07', theme: '行内样式' },
        { folder: 'Demo08', theme: 'sass' },
        { folder: 'Demo09', theme: 'props' },
        { folder: 'Demo10', theme: 'state' },
        { folder: 'Demo11', theme: '事件处理' },
        { folder: 'Demo12', theme: '条件渲染' },
        { folder: 'Demo13', theme: '受控组件' },
        { folder: 'Demo14', theme: 'ref' }
      ],
      active: 0
    };
  }

  _getClasses(i, c) {
    let { active } = this.state;
    return classnames(`nav-item-${c}`, { 'nav-item-active' : i == active });
  }

  _itemClick(i) {
    this.setState({ active: i });
  }

  render() {
    let { demos } = this.state;
    let { children } = this.props;
    let _this = this;
    return (
      <div className = 'nav'>

        <div className = 'nav-list'>
          <div className = 'nav-title'>React 使用指南</div>
          <div className = 'nav-map'>
            {
              demos.map((item, i) => {
                return (
                  <div className = 'nav-item' key = { i }>
                    <Link to = { item.folder.toLowerCase() } onClick = { () => this._itemClick(i) }>
                      <span className = { _this._getClasses(i, 'theme') }>{ item.theme }</span>
                      <span className = { _this._getClasses(i, 'folder') }>{ item.folder }</span>
                    </Link>
                  </div>
                );
              })
            }
          </div>
        </div>

        <div className = 'nav-content'>{ children }</div>
      </div>
    );
  }
};
