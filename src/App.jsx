import React, { useState } from 'react';
import { BrowserRouter as Router ,Route,Link,Switch} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import Sidebar from './pages/Sidebar';
import About from './pages/About'
import Contect from './pages/Contect'
import News from './pages/News'
import Navbar from './pages/Navbar';
import './App.css';

const App = () => {
    return (
        <>    
         <Router>
              <Navbar/>
              <div className="main">
               <Route  exact path="/" className='route' component={About}></Route>
                <Route path="/content" component={Contect}className='route'></Route>
                <Route path="/news" component={News}className='route'></Route>
                </div>
        </Router>
           
           
        </>
    );
}

export default App;
