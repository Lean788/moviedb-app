import React, { Component } from 'react';
import './App.css';
import Landing from './Components/home/Landing';
import Footer from './Components/layout/Footer';
import Navbar from './Components/layout/Navbar';
import store from './store';
import {Provider} from 'react-redux';

class App extends Component {
  render() { 
    return ( 
      <Provider store={store}>
        <div className="container">
          <Navbar />
          <Landing />
          <Footer className="card-footer" />
        </div>
      
      </Provider>



     );
  }
}


export default App;
