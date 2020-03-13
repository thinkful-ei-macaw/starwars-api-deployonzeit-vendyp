import React from 'react';
import Form from './components/Form';
import {Route} from 'react-router-dom';

class App extends React.Component {
  
  state = {
    results: []
  }

  handleFormSubmit = (type, searchTerm) => {
    console.log('form callback', type, searchTerm)
    const BASE_URL= 'https://swapi.co/api/'
    fetch(`${BASE_URL}${type}/?search=${searchTerm}`)
      .then(res=>{
          if(!res.ok){
              throw new Error(res.statusText)
          }
          return res.json()
      })
      .then(data=>{
        console.log(data)
          this.setState({results:data.results.map(item => item.name)})
      })
      .catch(err => console.log(err.message))
  }

  render(){
    return (
      <main className='App'>
        <Form onSubmit={this.handleFormSubmit} />
        <section>
          {JSON.stringify(this.state.results)}
        </section>
      </main>
    );
  }
}


export default App;
