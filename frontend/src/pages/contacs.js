import React, { Component } from 'react';
import './header.css';
import Header from './header';


class Contacts extends Component{

    render(){
        return(
                <div>
                    <Header />
                    <p>Our Adress:</p>    
                </div>
        );
    }
}

export default Contacts;