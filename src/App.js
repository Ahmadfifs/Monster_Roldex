import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list';
import {SearchBox} from './components/search/search'


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      list : [],
      searchFields: ''
    }
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({list : user}))
  }

  search = (args) => {
    this.setState({searchFields : args.target.value })
  } 

  render(){
    const { list , searchFields } = this.state;
    const filterMonster = list.filter(item => 
        item.name.toLowerCase().includes(searchFields.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          handleChange={this.search} 
        />
        <CardList list={filterMonster} />
      </div>
    )
  }

}

export default App;
