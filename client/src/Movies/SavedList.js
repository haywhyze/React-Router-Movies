import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SavedList extends Component {
 render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span key={movie.id} className="saved-movie">
            <NavLink 
              to={`/movies/${movie.id}`}>
                {movie.title}
            </NavLink>
          </span>
        ))}
        <NavLink to='/'><div className="home-button">Home</div></NavLink>
      </div>
    );
  }
}
