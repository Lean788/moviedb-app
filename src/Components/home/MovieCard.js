import {Card, Button, Alert} from 'react-bootstrap';
import React, { Component } from 'react'

export class MovieCard extends Component {
  render() {

    const {movie} = this.props;

    return (
      <Card className="text-center" style={{ width: '18rem', marginBottom: '50px' }}>
        <Card.Img variant="top" src={movie.Poster} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text style={{ textAlign: 'justify' }}>
                <Alert key='secondary' variant='secondary'>
                  Categoría:&nbsp; {movie.Type}
                </Alert>
                Año de estreno: <strong>{movie.Year}</strong><br></br>
                <i className="fab fa-imdb fa-2x" id="imdb-logo" /> ha valorado esta obra. &nbsp; <br></br>
                Conoce todo los detalles de {movie.Title} en el siguiente link!
            </Card.Text>
            <Button variant="secondary">Más info</Button>
          </Card.Body>
      </Card>
      

    )
  }
}

export default MovieCard;