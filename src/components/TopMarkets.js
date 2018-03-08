import React, { Component } from 'react';
import Market from './Market.js'

class TopMarkets extends Component {
    render() {
        console.log(this.props.topMarkets)
        if (this.props.topMarkets){
            const list = this.props.topMarkets.map((market, index) => {
                const name = market.name
                return (
                    <Market
                        key={index}
                        market={name} />
                )
            });
            return (
                <div className='top-markets'>
                    {list}
                </div>
    
            );
        } else {
            return (
                <div> Loading </div>
            )
        }
        
        
    };
}
export default TopMarkets;
