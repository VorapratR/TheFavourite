import React, { Component } from 'react';
import './App.css';
import Card from "../src/components/Card";
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
      <div cclass="container">
        <div className="columns">
              
        </div>
        <div class="row">
          <div class="col" >
            <div >
              <strong>Top Movie List</strong> 
              {this.state.movie.map(obj => 
                <div class="card">
                  <div class="card-body">
                  </div>
                    <p class="card-text"> 
                        {obj.rank} {obj.title}      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </p>
                </div>
              )}>   
            </div>
        </div>
        <div class="col" >
          <Card/>
        </div>
      </div>
    </div>
      
    );
  }
}
export default App;