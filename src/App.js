import React, { Component } from 'react';
import Counters from './component/counters';
import NavBar from './component/navbar';
import './App.css';

class App extends Component {
    state ={
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 3},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    };
    handleIncrement = counter => {
        console.log("count clicked");
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);

        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    };
    handleReset = () => {
        const counters = this.state.counters.map( c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    };
    handleDelete = (counterID) => {
        //console.log('Event Handler Called', counterID );
        const counts = this.state.counters.filter( c => c.id !== counterID );
        this.setState({counters: counts});
    };
  render() {
    return (
        <React.Fragment>
            <NavBar totalCounters={this.state.counters.filter (c=>c.value >0).length}/>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                    />
                </main>
        </React.Fragment>
    );
  }
}

export default App;
