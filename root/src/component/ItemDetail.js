import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemDetail extends Component {
    render() {
        return (
            <div>
               <div>
  <div className="container" id="prod-detail">
    <div className="row">
      <div className="col-sm-6">
        <img id="prod-img" src="https://placehold.it/400" />
      </div>
      <aside className="col-sm-6">
        <article className="card-body p-5">
          <h3 className="title mb-3">Original Version of Some product name</h3>
          <p className="price-detail-wrap"> 
            <span className="price h3 text-primary"> 
              <span className="currency">Rp </span><span className="num">99000</span>
            </span> 
          </p>
          <dl className="item-property">
            <dt>Description</dt>
            <dd>
              <p>
                Here goes description consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              </p>
            </dd>
          </dl>
          <dl className="param param-feature">
            <dt>Model#</dt>
            <dd>12345611</dd>
          </dl>
          <dl className="param param-feature">
            <dt>Color</dt>
            <dd>
              <span className="badge badge-dark">Hitam</span>
              <span className="badge badge-success">Hijau</span>
              <span className="badge badge-danger">Merah</span>
              <span className="badge badge-info">Cyan</span>
            </dd>
          </dl>
          <div className="row">
            <div className="col-sm-5">
              <dl>
                <dt>Quantity: </dt>
                <dd>
                  <select className="form-control form-control-sm" style={{width: 70}}>
                    <option> 1 </option>
                    <option> 2 </option>
                    <option> 3 </option>
                  </select>
                </dd>
              </dl>
            </div>
          </div>
          <Link to="/buy" id="btn-itemdetail" className="btn btn-lg btn-primary text-uppercase"> Buy now </Link>
          <a href="#" className="btn btn-lg btn-outline-primary text-uppercase"> <i className="fas fa-shopping-cart" /> Add to cart </a>
        </article>
      </aside>
    </div>
  </div> 
  <br /><br />
</div>

            </div>
        );
    }
} 

export default ItemDetail;