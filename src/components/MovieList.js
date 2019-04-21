import React, {Component} from 'react';
import Movie from './Movie';
import _ from 'lodash';
class MovieList extends Component {
  constructor(props){
    super(props);
    this.state = {
        movies: []
    };
    let app = this.props.db.database().ref('favour');
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }
  getData(values){
    let moviesVal = values;
    let movies = _(moviesVal)
                    .keys()
                    .map(movieKey => {
                      let cloned = _.clone(moviesVal[movieKey]);
                      cloned.key = movieKey;
                      return cloned;
                    }).value();
    this.setState({
      movies: movies
    });
  }
  render() {
    let movieNodes = this.state.movies.map((movie) => {
      return (
        <div className="card">
          <div className="card-content">
          <Movie 
            msgKey={Movie.key} 
            movie = {movie.movie} 
            db={this.props.db}
          />
          </div>
        </div>
      )
    });
    return (
      <div>
        {movieNodes}
      </div>
    );
  }
}
export default MovieList