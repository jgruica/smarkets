import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Smarkets from './components/Smarkets'

class App extends Component {
  render() {
    return (
      <div className='smarkets'>
        <div className='main-game'>
          <Smarkets />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)