import React from 'react';
import { Footer,Blog,Possibility,Laysux,Header,Features } from './containers';
import { Navbar,Brand,CTA } from './components';
import './App.css';

const App = () => {
    return(
        <div className='App'>
            <div className='main__background'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Laysux />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App