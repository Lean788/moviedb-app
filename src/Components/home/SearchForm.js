import React, { Component } from 'react';
import {searchMovie, fetchMovies} from '../../Services/Redux/Actions/searchActions';
import {connect} from 'react-redux';
import { Form, Button, FormControl } from 'react-bootstrap';



export class searchForm extends Component {
    
  onChange = (e) => {
        this.props.searchMovie(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text)
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
            <h2 className="display-5 mb-3">
                <i className='fa fa-search'/> Busca tu película o serie favorita...
            </h2>
            <Form id="searchForm" onSubmit={this.onSubmit}>
                <FormControl
                size="lg"
                type="text"
                className="form-control"
                placeholder="Introduce el nombre de la película o serie..."
                onChange={this.onChange}
                />
                <Button type="submit" className="btn btn-secondary btn-bg mt-3">Buscar</Button>
            </Form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(mapStateToProps, {searchMovie, fetchMovies})(searchForm);