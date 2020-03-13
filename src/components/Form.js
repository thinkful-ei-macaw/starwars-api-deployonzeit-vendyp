import React from 'react';

class Data extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          searchItem: {
            value: ''
          },
          queryItem:{
              value: 'films'
          }

        }
      }

      updateSearchItem(searchItem){
          console.log(searchItem)
          this.setState({searchItem: {
              value: searchItem
          }
        })
      }
      updateQueryItem(chosenValue){
        console.log(chosenValue)
        this.setState({queryItem: {
            value: chosenValue
        }
      })
    }


      validateSearchItem(){
        const name = this.state.name.value.trim();
        if (name.length === 0) {
          return 'Name is required';
        } else if (name.length < 3) {
          return 'Name must be at least 3 characters long';
        }
      }


      validateQueryItem = (event) => {
        event.preventDefault();
        const validSearchItem = this.state.searchItem.value;
        const validQueryItem= this.state.queryItem.value;
        if(validSearchItem !== '' || validQueryItem !== '') {
          this.props.onSubmit(validQueryItem, validSearchItem)
            // return this.handleSearchItem(this.state.queryItem.value, this.state.searchItem.value)
        } else {
            alert('Must input text!')
        }
    }
      

    render(){

        return (
            
            <form onSubmit ={this.validateQueryItem}>
                <label htmlFor="searchType">Search Type:</label>
                <select id="searchType" value={this.state.queryItem.value} onChange={ e=> this.updateQueryItem(e.target.value)}>
                    <option value="films">films</option>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                    <option value="starships">starships</option>
                    <option value="vehicle">Vehicle</option>
                </select>
                <label htmlFor="searchItem">Search a starwars term:</label>
                <input name="searchItem" 
                type="text" 
                id="searchItem" 
                value={this.state.searchItem.value}
                onChange={e=>this.updateSearchItem(e.target.value)}
                ></input>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Data;