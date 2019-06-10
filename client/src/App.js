import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    let movieExist = false;
    savedList.forEach(list => {
      if (movie.id === list.id) {
        movieExist = true;
      }
    })
    if (!movieExist) savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <Router>
        <div>
          <SavedList list={this.state.savedList} />
          <Route
            exact 
            path='/'
            component={MovieList}
          />
          <Route
            exact 
            path='/movies/:id'
            component={
              (props) => 
                <Movie 
                  {...props} 
                  addToSavedList={this.addToSavedList} 
                />
              } 
          />
        </div>
      </Router>
    );
  }
}
