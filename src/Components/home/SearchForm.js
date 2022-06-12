import React, { Component } from 'react';
import {searchMovie} from '../../Services/Redux/Actions/searchActions';
import {connect} from 'react-redux';



export class searchForm extends Component {
    
  onChange = (e) => {
        this.props.searchMovie(e.target.value);
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
            <h1 className="display-4 mb-3">
                <i className='fa fa-search'/> Busca tu película o serie favorita...
            </h1>
            <form id="searchForm">
                <input
                type="text"
                className="form-control"
                placeholder="Introduce el nombre de la película o serie..."
                onChange={this.onChange}
                />
                <button type="submit" className="btn btn-primary btn-bg mt-3">Buscar</button>
            </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(mapStateToProps, {searchMovie})(searchForm);