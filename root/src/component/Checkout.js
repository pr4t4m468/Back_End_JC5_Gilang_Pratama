import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Checkout extends Component {
    render() {
        return (
           <div>
               <div className="container" id="tbchk">
  <div className="row">
    <div className="col-sm-6">
      <table className="table-responsive">
      </table><table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Item</th>
            <th>Harga</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th> <img src="https://placehold.it/100" /> </th>
            <th>Rp 60000<br /><small>ipsum dolor sit amet consectetur</small></th>
            <th><button id="hps" className="btn btn-danger"><i className="fa fa-ban" aria-hidden="true" /> Hapus</button></th>
          </tr>
          <tr>
            <th> <img src="https://placehold.it/100" /> </th>
            <th>Rp 60000<br /><small>ipsum dolor sit amet consectetur</small></th>
            <th><button id="hps" className="btn btn-danger"><i className="fa fa-ban" aria-hidden="true" /> Hapus</button></th>
          </tr>
          <tr>
            <th> <img src="https://placehold.it/100" /> </th>
            <th>Rp 60000<br /><small>ipsum dolor sit amet consectetur</small></th>
            <th><button id="hps" className="btn btn-danger"><i className="fa fa-ban" aria-hidden="true" /> Hapus</button></th>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="col-sm-6">
      <div className="container" id="pay">
        <h3>Metode Pembayaran</h3>
        <div className="table-responsive">
          <div className="form-group">
            <input type="radio" name="pay" defaultChecked /><i id="icon" className="fa fa-credit-card-alt" /> <label className="h5">Transfer ATM</label>
          </div><hr align="left" style={{borderTop: 'dotted 3px', width: 450}} /><div className="form-group">
            <input type="radio" name="pay" /><i id="icon" className="fa fa-exchange" /> <label className="h5">Virtual Account</label>
          </div><div className="form-group">
            <select className="float-right mt-3" required>
              <option value="bank" disabled selected>-- Pilih Bank --</option>
              <option value="bca">BCA</option>
              <option value="bni">BNI</option>
              <option value="mandiri">Mandiri</option>
            </select>
          </div><div className="form-group">
            <div className="card-group">
              <div className="card bg-light mt-3" style={{maxWidth: '18rem'}}>
                <div className="card-header text-center">BCA</div>
                <div className="card-body">
                  <h5 className="card-title text-center">a/n <br /> PREDO NUSANTARA</h5>
                  <p className="card-text text-center">555 666 777 8</p>
                </div>
              </div>
            </div>
          </div><div className="form-group">
            <Link to="/invoice" className="btn btn-primary float-right"> Continue <i className="fa fa-chevron-right" /> </Link>
          </div><table className="table">
            <form />
          </table>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-6">
      <table className="table-responsive">
      </table><table className="table">
        <thead className="thead-dark">
          <tr>
            <th />
            <th>Nama Penerima</th>
            <th>Alamat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th><input type="radio" name="alamat" /></th>
            <th>Gilang</th>
            <th><p>Jl. Kacang No. 1 <br />Jakarta Barat</p></th>
          </tr>
          <tr>
            <th><input type="radio" name="alamat" /></th>
            <th>Bagas</th>
            <th><p>Jl. Bumi No. 2 <br />Jakarta Selatan</p></th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

            </div>
        );
    }
} 

export default Checkout;