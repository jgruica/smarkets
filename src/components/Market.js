import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Market extends Component {
  render() {
    return (
      <div className='market-item'>
        <Button bsSize="large">{this.props.market}</Button>
      </div>
    );
  };
}
export default Market;
