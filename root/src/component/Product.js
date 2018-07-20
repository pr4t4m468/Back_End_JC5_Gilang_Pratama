import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

// import img_item_detail from 'https://via.placeholder.com/600x400';

class Product extends Component {
    render() {
        return (
            <div>
               <div className="container" id="cont1">
  <div className="row">
    <div className="col-sm-6">
      {/* Header A */}
      <div className="container">
        <img className="img-fluid" src="http://via.placeholder.com/600x400" />
        <button type="button" style={{margin: 10, float: 'right'}} className="btn btn-outline-primary">Lihat semua koleksi</button>
      </div>
    </div>
    <div className="col-sm-6">
      {/* Row atas */}
      <div className="row">
        <div className="card-group">
          {/* Card 1 */}
          <div className="card" style={{width: '18rem'}}>
            <Link to="/item-detail"><img className="card-img-top" src="https://via.placeholder.com/600x400&text=Klik Disini" alt="" /></Link>
            <div className="card-body">
              <h5 className="card-title">Lorem Ipsum</h5>
              <span className="badge float-right badge-primary">Rp 99.000,-</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="http://via.placeholder.com/600x400" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Lorem Ipsum</h5>
              <span className="badge float-right badge-primary">Rp 99.000,-</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="http://via.placeholder.com/600x400" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Lorem Ipsum</h5>
              <span className="badge float-right badge-primary">Rp 99.000,-</span>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* Row bawah */}
      <div className="row">
        <div className="card-group">
          {/* Card 1 */}
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="http://via.placeholder.com/600x400" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Lorem Ipsum</h5>
              <span className="badge float-right badge-primary">Rp 99.000,-</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="http://via.placeholder.com/600x400" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Lorem Ipsum</h5>
              <span className="badge float-right badge-primary">Rp 99.000,-</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="http://via.placeholder.com/600x400" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Lorem Ipsum</h5>
              <span className="badge float-right badge-primary">Rp 99.000,-</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
  <br />
  <div className="row">
    <div className="col-sm-6">
      {/* Header A */}
      <div className="container">
        <img className="img-fluid" src="http://via.placeholder.com/600x400" />
        <button type="button" style={{margin: 10, float: 'right'}} className="btn btn-outline-primary">Lihat semua koleksi</button>
      </div>
    </div>
    <div className="col-sm-6">
      {/* Row atas */}
      <div className="row">
        <div className="card-group">
          {/* Card 1 */}
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="http://via.placeholder.com/600x400" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Lorem Ipsum</h5>
              <span className="badge float-right badge-primary">Rp 99.000,-</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="http://via.placeholder.com/600x400" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Lorem Ipsum</h5>
              <span className="badge float-right badge-primary">Rp 99.000,-</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="http://via.placeholder.com/600x400" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Lorem Ipsum</h5>
              <span className="badge float-right badge-primary">Rp 99.000,-</span>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* Row bawah */}
      <div className="row">
        <div className="card-group">
          {/* Card 1 */}
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="http://via.placeholder.com/600x400" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Lorem Ipsum</h5>
              <span className="badge float-right badge-primary">Rp 99.000,-</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="http://via.placeholder.com/600x400" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Lorem Ipsum</h5>
              <span className="badge float-right badge-primary">Rp 99.000,-</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="http://via.placeholder.com/600x400" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Lorem Ipsum</h5>
              <span className="badge float-right badge-primary">Rp 99.000,-</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</div>

            </div>
        );
    }
} 

export default Product;