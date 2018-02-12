import React from 'react';

import Header from '../common/header';
import Footer from '../common/footer';

export default function HomePage(){
    return (
        <div>
            <Header heading="Product Management"/>
                <div className="main-body container">
                </div>
            <Footer/>
        </div>
    )
}