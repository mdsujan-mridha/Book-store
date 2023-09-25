import React, { Fragment } from 'react';
import Hero from './Hero';
import ExchangeBook from './ExchangeBook';
import BuyBook from "./BuyBook";
const Home = () => {
    return (
        <Fragment>
            <div>
                <Hero />
                <ExchangeBook />
                <BuyBook />
            </div>
        </Fragment>
    );
};

export default Home;