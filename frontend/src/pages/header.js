import React, { Component } from 'react';
import './header.css';
import Shop from '../shop';
import Contacts from './contacs';
import logo from '../img/logo.svg';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';


class Header extends Component{

    render(){
        return(
            <Router>
                <div>
                    <ul className="menu"> 
                    <img alt="logo" className="img" src={logo}/>
                    <Link to="#"><a className="Option">Home</a></Link>
                    <Link to="/shop"><a className="Option">Store</a></Link> 
                    <Link to="/contacts"><a className="Option">Information</a></Link>  
                    <div className="LogBtn">
                        Login
                    </div>
                    </ul>
                    <Switch>
                        <Route path="/shop" component={Shop}/>
                        <Route path="/contacts" component={Contacts}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Header;