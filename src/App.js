import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navigation from './components/Navigation';
import Album from './components/Album';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      albums: [],
      term: null
    }
  }
  componentDidMount(){
    this.getData();
  }
  getData(){
    axios.get(`https://itunes.apple.com/us/rss/topalbums/limit=100/json`)
        .then(res => {
          let  albums = res.data.feed.entry;
          if (this.state.term===null){
            albums = res.data.feed.entry;
          }else{
              albums = res.data.feed.entry.filter(
                (album) =>{
                  return album["im:name"].label.toLowerCase().indexOf(
                  this.state.term.toLowerCase()) !== -1;
                }
              )

          }
          this.setState({ albums });
          console.log('state',this.state.albumsalbunes);
        })
  }

  searchAlbum(e){
      const term = e.target.value;
      this.setState({term});
      this.getData();
  }

  render() {
    return (
      <div className="App">
          <div className="navbar navbar-dark bg-dark navbar-default sticky-top ">
            <a className="navbar-brand" href="#">Top 100 Albums </a>
            <input type="text" placeholder="Search.." className="form-control" onChange={e => {this.searchAlbum(e);}}/>
          </div>
          <div className="container">
            <div className="row mt-3 mb-3">
              {
                this.state.albums.map((value) =>
                  <Album album={value} />
                )
              }
            </div>
          </div>
          <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>

      </div>
    );
  }
}
export default App;
