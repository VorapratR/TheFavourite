
import React, {Component} from 'react';
import trim from 'trim';
class MovieBox extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      movie: ''
    };
  }
  onChange(e){
    this.setState({
      movie: e.target.value
    });
  }
  onKeyup(e){
    if(e.keyCode === 13 && trim(e.target.value) !== ''){
      e.preventDefault();
      let dbCon = this.props.db.database().ref('/favour');
      dbCon.push({
        movie: trim(e.target.value)
      });
      this.setState({
        movie: ''
      });
    }
  }
render() {
    return (
      <form>
       <textarea 
          className="textarea"
          placeholder="Favourite Movie "
          cols="100"
          onChange={this.onChange}
          onKeyUp={this.onKeyup}
          value={this.state.movie}>
       </textarea>
      </form>
    )
  }
}
export default MovieBox