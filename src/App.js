import React, { Component } from 'react';
import './App.css';
import { CardList } from './Component/Card-List/Card-List.component';
import { SearchBox } from './Component/SearchBox/SearchBox.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

handleChange = (e)=>{
  this.setState({searchField: e.target.value})
}

  render(){
    const{monsters, searchField} = this.state
    const filteredMonster = monsters.filter(mon=>
      mon.name.toLowerCase().includes(searchField.toLowerCase()))
    const test = monsters.map(({...mons})=>(mons))
    console.log(test)
    const id = test
    console.log(id)
  return (

    <div className="App">
      <h1>Monster Arun Test</h1>
      <SearchBox
        placeholder ='search monster'
        handleChange = {this.handleChange}
      />
      <CardList monst= {filteredMonster}/>
    </div>
  );
  }
}

export default App;