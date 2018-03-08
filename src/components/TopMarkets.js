import React, { Component } from 'react';
import Market from './Market'

class TopMarkets extends Component {
    render() {
        if (this.props.topMarkets) {
            const list = this.props.topMarkets.map((market, index) => {
                return (
                    <Market
                        key={index}
                        market={market}
                        clickOnMarket={this.props.clickOnMarket}
                    />
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
