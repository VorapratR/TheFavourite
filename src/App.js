import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
var config = {
  /*apiKey: "AIzaSyALI99GmjUB8D54YFKChBvrShrnb7yYT7I",
  authDomain: "react-chapter8.firebaseapp.com",
  databaseURL: "https://react-chapter8.firebaseio.com",
  projectId: "react-chapter8",
  storageBucket: "react-chapter8.appspot.com",
  messagingSenderId: "228016244388"*/
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

      <div>
        {this.state.movie.map(obj => <div>{obj.rank} {obj.title}</div>)} 
      </div> 
    );
  }
}




export default App;