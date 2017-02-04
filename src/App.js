import React, { Component } from 'react';
import List from './List.js'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4 col-xs-4'>
            <List title='To do' />
          </div>
          <div className='col-md-4 col-xs-4'>
            <List title='In Progress' />
          </div>
          <div className='col-md-4 col-xs-4'>
            <List title='Done' />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
