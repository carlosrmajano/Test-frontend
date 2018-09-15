import React, { Component } from 'react';
import '../App.css';
class Navigation extends Component {
  render() {
    return (
      <div className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Top 100 Albums </a>
          <input type="text" placeholder="Search.." className="form-control"></input>
        </div>
    );
  }
}

export default Navigation;
