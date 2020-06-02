import React from "react";
import ReactDOM from "react-dom";
import { groceries } from "./data";
import "./styles.css";
import GroceryList from "./components/GroceryList";
import ListForm from "./components/ListForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      groceries: groceries
    };
  }

  toggleItem = itemId => {
    // console.log("Got IT", itemId);
    this.setState({
      groceries: this.state.groceries.map(item => {
        if (itemId === item.id) {
          // console.log({...item})
          return {
            ...item,
            purchased: !item.purchased
          };
        }
        return item;
      })
    });
  };

  addItem = itemText => {
    const newItem = {
      name: itemText,
      purchased: false,
      id: Date.now()
    };
    this.setState({
      groceries: [...this.state.groceries, newItem]
    });
  };
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <ListForm addItem={this.addItem} />
        </div>
        <GroceryList
          groceries={this.state.groceries}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
