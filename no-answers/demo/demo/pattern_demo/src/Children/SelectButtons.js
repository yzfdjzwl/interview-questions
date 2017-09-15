import React, { Component } from 'react';
import EventEmitter from './EventEmitter';

class SelectButtons extends Component {
  constructor() {
    super();
    this.onClickItem = this.onClickItem.bind(this);
  }

  onClickItem(item) {
    EventEmitter.dispatch('changeItem', item);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.onClickItem('item1')}>我是item1</button>
        <button onClick={() => this.onClickItem('item2')}>我是item2</button>
      </div>
    );
  }
}

export default SelectButtons;
