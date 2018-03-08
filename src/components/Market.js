import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class Market extends Component {
  render() {
    return (
      <div className='market-item'>
        <ListGroup>
          <ListGroupItem>
            <Link to={'/' + this.props.market.id}>
              <div>{this.props.market.name}</div>
              <div className='league'>{this.props.market.parent_name}</div>
            </Link>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  };
}
export default Market;
