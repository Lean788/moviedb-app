import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="row">
            <div className="col-sm-12">
                <div className="footer p-3 mt-4 text-center bg-dark text-light">
                    Developed by: 
                    <span className="text-warning font-weight-normal"> 
                    &nbsp; Leandro Salvado
                    </span>
                    , using <i className="fab fa-react" /> React JS &amp; redux JS integrated with external movie data API (MovieDB)
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Footer