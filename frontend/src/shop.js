import React, { Component } from 'react';
import client from './client'
import './pages/shop.css';
import alco from './img/alco.jpg';


class Shop extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      inputValue: ''
    };
    
    this.buttonClicked = this.buttonClicked.bind(this); 

  }

  componentDidMount(){
    client.getItems((phones) => {
      this.setState({
        items: phones
      });
    });
  }

 

  buttonClicked() {

    const data = {
      'id': this.state.items[this.state.items.length - 1].id + 1,
      'itemname': this.state.inputValue
    }
    
    this.setState({
      items: [...this.state.items, data],
      inputValue: ''
    });
    
    client.createItem(data, (phone) => {
      if (phone)
        alert('Created!');
    });  

  }

  deleteItem(id) {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id)
    });

    client.createItem(id, (phone) => {
      if(phone)
        alert('Deleted!')
    });
  }

  render() {
    return (
      <div>
      
        <ul>
          {
            this.state.items.map((item, index) =>
            <div id="rectangle">
              <li key={index}>
                <h2>{item.itemname}</h2>
                <img alt="alco" className="img" src={alco} / >
                <p>{item.description}</p>
                <button onClick={this.deleteItem.bind(this, item.id)}>Add</button>
              </li>
            </div>
            )
          }
        </ul>
      </div>
    );
  }
}


export default Shop;