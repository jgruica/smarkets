import React, { Component } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom';
import TopMarkets from './TopMarkets.js'
import Market from './Market.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topMarkets: []
    };
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://fe-api.smarkets.com/v0/events/popular/')
      .then((response) => {
        this.setState({ topMarkets: response.data.results })
      })
      .catch((error) => {
        console.log(error)
      })
  }


  render() {
    return (
      <div className='app' >
        <Route exact path='/'
          render={(props) => <TopMarkets {...props}
            topMarkets={this.state.topMarkets}
          />}
        />
  
      </div>
    )
  }
}

export default App;

