import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Market extends Component {
  render() {
    return (
      <div className='market-item'>
        <Link to={'/' + this.props.market.id}>{this.props.market.name}</Link>
      </div>
    );
  };
}
export default Market;
