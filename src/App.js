import React, { Component } from 'react';
import firebase from 'firebase';
import {DB_CONFIG} from './Config';

class App extends Component {
  constructor(){
    super()
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('speed')
    this.state ={
      speed:0
    }
  }
  componentDidMount() {
    this.database.on('value',snap => {
      this.setState({
        speed: snap.val()
      })
    })
  }
  render() {
    return (
      <div className="App">
        <h1>this {this.state.speed}</h1> 
      </div>
    );
  }
}

export default App;
