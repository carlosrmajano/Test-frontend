import React, { Component } from 'react';
class Album extends Component {
  render() {
    return (
        <div className="Album col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-1 mb-1">
            <div className="card">
            <img src={this.props.album["im:image"][2].label} alt="John" />
            <h5>{this.props.album["im:name"].label}</h5>
            <h6 className="title"> {this.props.album["im:artist"].label}</h6>
            <div className="box_span col-xs-12 col-sm-12 col-md-12">
              <span className="badge badge-success col-xs-3 col-sm-3 col-md-3 text-left float-left float-md-left">{this.props.album["im:price"].label}</span>
              <span className="col-xs-6 col-sm-6 col-md-6"></span>
              <span className="badge badge-info col-xs-3 col-sm-3 col-md-3 text-right float-right float-md-right">{this.props.album["im:itemCount"].label} songs</span>
            </div>
            <a href={this.props.album.link.attributes.href} target="_blank"><span className="badge badge-light">More</span></a>
          </div>
        </div>
    );
  }
}

export default Album;
