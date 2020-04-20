import React, { useState } from 'react';
import './App.css';
import Home from './home';
import Statistics from './statistics';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


function App() {
    const[statistics,setStatistics]=useState({})
   
    // console.log(statistics, 'da vidimo sta se desava');
    
    return (
        <Router>
            <header>
                <div className='headerLogo'>
                    <img className='logo' src='./logo.png' alt='logo'></img>
                </div>
                <div></div>
                <div className='navBar'>
                    <Link to='/'><h5 className='navText'>Home</h5></Link>
                    <Link to='/statistics'><h5 className='navText'>Statistics</h5></Link>
                </div>
            </header>
            <Switch>
                <Route path="/statistics">
                    <Statistics statistics={statistics} />
                </Route>
                <Route  path="/">
                    <Home setStatistics={setStatistics} statistics={statistics} />
                </Route>
            </Switch>
        </Router>

    )
};


export default App;
