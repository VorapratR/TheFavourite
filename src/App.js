import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyDwnC6OllHNAtBq9nrSdyYmtZl0h-R5jlQ",
  authDomain: "moviefav-9bede.firebaseapp.com",
  databaseURL: "https://moviefav-9bede.firebaseio.com",
  projectId: "moviefav-9bede",
  storageBucket: "moviefav-9bede.appspot.com",
  messagingSenderId: "1087624178600"
};
firebase.initializeApp(config);

var db=firebase.database();


class App extends Component {
  state = {movie:[
    {id : '36382', rank:'0' ,title : 'batman'}
  ]}
  componentDidMount(){
    db.ref('/TopRated').on('value',snapshot => {
      let val = snapshot.val();
      this.setState({movie:val})
    });
  }
  render() {
    return (
      <div className="container">
      <div className="columns">
        <div className="column is-3"></div> 
        
        <div className="column is-6">
        <strong>Top Movie List</strong> 
        {this.state.movie.map(obj => <div>{obj.rank} {obj.title}</div>)} 
         
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
    
        </div>
      </div>
    </div>


    );
  }
}




export default App;