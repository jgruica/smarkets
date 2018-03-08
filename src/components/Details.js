import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventData: null
        }
    }

    componentDidMount() {
        const marketId = this.props.match.params.marketId
        axios.get('https://cors-anywhere.herokuapp.com/https://fe-api.smarkets.com/v0/events/id/' + marketId)
            .then((response) => {
                this.setState({ eventData: response.data })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        if (this.state.eventData) {
            const e = this.state.eventData
            const g = e.contract_groups[e.event.primary_contract_group_id]
            const contracts = g.contracts.map(c => e.contracts[c])
            return (
                
                <div className='details'>
                <div className='back'> <Link to='/'>  &#8249; BACK </Link> </div>
                    <h1> {e.event.name}</h1>

                    <span className='type'> {e.event.event_type} </span>
                    <span> > </span>
                    <span className='league'> {e.event.parent_name}  </span>


                    <div className='date'> {moment(e.event.start_datetime).format('MMMM Do YYYY, h:mm:ss a')}</div>
                    

                    <h2> {g.name} </h2>
                    <ListGroup>
                        {contracts.map((c,index) =>
                            <ListGroupItem key={index}>
                                {c.name}
                            </ListGroupItem>
                        )}
                    </ListGroup>

                </div>
            )
        } else {
            return (
                <div className='loader'></div>
            )
        }
    }

}
export default Details;