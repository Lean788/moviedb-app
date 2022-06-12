
import React, { Component } from 'react'

export class MovieCard extends Component {
  render() {

    const {movie} = this.props;

    return (
      <div>
        <div ClassName="col-md-3 mb-5">
            <div ClassName="card card-body bg-dark text-center h-100">
                <img ClassName="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
                <h5 ClassName="text-light card-title">
                    {movie.Title} - {movie.Year}
                </h5>
                <a ClassName="btn btn-primary" href="/">
                    Detalles de la pelicula
                    <i ClassName="fas fa-chevron-right" /> 
                </a>

            </div>
        </div>
      </div>
    )
  }
}

export default MovieCard;