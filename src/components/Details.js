import React, { Component } from 'react';
import axios from 'axios'

class Details extends Component {
    constructor (props) {
        super(props)
        this.state = {
            event: null
        }
    }

    componentDidMount() {
        const marketId = this.props.match.params.marketId
        axios.get('https://cors-anywhere.herokuapp.com/https://fe-api.smarkets.com/v0/events/id/' + marketId)
          .then((response) => {
            this.setState({ event: response.data.event })
          })
          .catch((error) => {
            console.log(error)
          })
    }

    render() {
        if (this.state.event) {
            const listOfEvents = this.state.event
            return (<div>
                {listOfEvents.name}
            </div>)
        } else {
            return (
                <div> Loading </div>
            )
        }
    }

}
export default Details;