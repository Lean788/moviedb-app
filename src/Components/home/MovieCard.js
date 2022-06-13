import {Card, Button} from 'react-bootstrap';
import React, { Component } from 'react'

export class MovieCard extends Component {
  render() {

    const {movie} = this.props;

    return (
      <Card className="text-center" style={{ width: '18rem', marginBottom: '50px' }}>
        <Card.Img variant="top" src={movie.Poster} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>
              Conoce todo los detalles de {movie.Title} en el siguiente link!
            </Card.Text>
            <Button variant="secondary">Más info</Button>
          </Card.Body>
      </Card>
      

    )
  }
}

export default MovieCard;