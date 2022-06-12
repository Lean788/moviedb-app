
import React from 'react';
import spinner from './spinner.gif';


// eslint-disable-next-line no-unused-vars
function Spinner() {
  return (
    <div>
        <img
        src={spinner}
        style={{width: '200px', margin: 'auto', display: 'block'}}
        alt="Loading..."
        />
    </div>
  )
}

export default spinner