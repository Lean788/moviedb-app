
import React, { Component } from 'react'

export class MovieCard extends Component {
  render() {

    const {movie} = this.props;

    return (
        <div className="col-md-3 mb-4">
          <div className="col">
            <div className="card">
              <img src={movie.Poster} className="card-img-top" alt="Cover de la pelicula"/>
              <div ClassName="card-body">
                <h5 className="card-title">{movie.Title} - año {movie.Year}</h5>
                <p className="card-text">Conoce todo los detalles de {movie.Title} en el siguiente link! </p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button type="button" class="btn btn-secondary">
                    <i class="bi bi-film"></i> 
                      &nbsp; Más info
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      

    )
  }
}

export default MovieCard;