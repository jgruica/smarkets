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
                    />
                )
            });
            return (
                <div className='top-markets'>
                <h1> Top Markets </h1>
                    {list}
                </div>

            );
        } else {
            return (
                <div class='loader'></div>
            )
        }


    };
}
export default TopMarkets;
