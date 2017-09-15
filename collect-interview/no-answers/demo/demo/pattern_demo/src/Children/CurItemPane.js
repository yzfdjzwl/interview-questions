import React, { Component } from 'react';
import EventEmitter from './EventEmitter';

class CurItemPane extends Component {
  constructor() {
    super();
    this.state = {
      curItem: 'item1',
    };
  }

  componentDidMount() {
    EventEmitter.subscribe('changeItem', newItem => {
      this.setState({ curItem: newItem });
    });
  }

  render() {
    return (
      <div>This curItem is: {this.state.curItem}</div>
    );
  }
}

export default CurItemPane;
