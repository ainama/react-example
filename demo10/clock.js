import React from 'react';

export default class Clock extends React.Component {
  constructor(props,context) {
    super(props,context)
    this.state = {
      time: this._timeFormat(new Date().getTime())
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this._updateTime();
    }, 1000 );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _updateTime() {
    let _time = this._timeFormat(new Date().getTime());
    this.setState({ time: _time });

    // setState 默认异步操作，如需使用结果，可在第二参数回调
    // this.setState({ time }, () => {
    //   console.log('time', this.state.time);
    // });
  }

  _timeFormat(t) {
    let _now = new Date(t);
    let _y = _now.getFullYear();
    let _m = _now.getMonth() + 1;
    let _d = _now.getDate();
    let _h = _now.getHours();
    let _mm = _now.getMinutes();
    let _s = _now.getSeconds();
    let _str = '';
    if(_h > 12) {
        _h -= 12;
        _str = ' PM';
    } else {
        _str = ' AM';
    }
    _h = _h < 10 ? '0' + _h : _h;
    _d = _d < 10 ? '0' + _d : _d;
    _m = _m < 10 ? '0' + _m : _m;
    _mm = _mm < 10 ? '0' + _mm : _mm;
    _s = _s < 10 ? '0' + _s : _s;
    let _xy = _y + '.' + _m + '.' + _d + ' ' + _h + ':' + _mm + ':' + _s;
    _xy += _str;
    return _xy;
  }

  render() {
    let { time } = this.state;
    return (
      <h2>{ time }</h2>
    );
  }
};
