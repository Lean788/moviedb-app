
import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieCard from './MovieCard';


export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = '';

    content = movies.Response === 'True' ? 
    movies.Search.map((movie, index) => <MovieCard key={index} movie={movie} />) : 
    null ;
    
    return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap'}} >{content}</div>
    );
  }
}

const MapStateToProps = state => ({
    movies: state.movies.movies 
});

export default connect(MapStateToProps)(MoviesContainer)