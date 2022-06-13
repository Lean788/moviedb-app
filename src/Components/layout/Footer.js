import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <Card.Footer className="col-sm-12" style={{ bottom: '0' }}>
                <div className="card-footer p-3 mt-4 text-center bg-dark text-light">
                    Developed by: 
                    <span className="text-warning font-weight-normal"> 
                    &nbsp; Leandro Salvado
                    </span>
                    , using <i className="fab fa-react" /> React JS &amp; redux JS integrated with external movie data API (MovieDB)
                </div>
            </Card.Footer>
        </div>
      </div>
    )
  }
}

export default Footer