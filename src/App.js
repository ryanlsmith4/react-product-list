import React, { Component } from 'react';
import inventory, { categories } from './inventory';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      category : '',
      version: 1.9,
    };
  }
  
  render() {

    const cats = categories.map((item, i) => {
      return (<button key={`category-${i}`}
      onClick={(e) => {
        this.setState({ category : item}) // <-- Good!
        // this.state.category = item // <-- Bad!
      }}>
      {item}
      </button>)
    });

    cats.push(<button key={`category-''`}
    onClick={(e) => {
      this.setState({ category : ''}) // <-- Good!
      // this.state.category = item // <-- Bad!
    }}>
    All
    </button>);

    const products = inventory.filter((item) => {
      if (this.state.category === '') {
        return true
      }
      return item.category === this.state.category;
    }).map(({name, id, description, price, category}, i) => {

      return (
        <div key={`product-${id}`}>
         <h1>{name}</h1>    
          <small>{description}</small> ${price}
          <p>{category}</p>
        </div>
      )
    })

    return (
      <div className="App">
        <h1>Show products here</h1>
        <p>{this.state.category}</p>

        <ul>
          {/* List product categories here */}
          {cats}
        </ul>

        <ul>
          {/* Products listed here */}
          {products}
        </ul>

      </div>
    );
  }
}

export default App;
