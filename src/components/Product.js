import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="card mb-2">
          <img src={this.props.image} className="img-fluid" alt="Responsive"/>
          <div className="card-body">
            <h4 className="card-title">{this.props.name}</h4>
            <p className="card-text">{this.props.price}</p>
          </div>
        </div>
        <button type="button" className="btn btn-primary">Mua hàng</button>
      </div>
      
    )
  }
}
