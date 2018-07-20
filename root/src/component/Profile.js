import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
    render() {
        return (
           <div>
               <div className="container">
  <div className="row">
    <div className="col-sm-4 col-sm-offset-2" />
    <div className="row bg-light border border-primary" id="profile_display">
      <div className="col-sm-6">
        <div id="profile_display" className="text-center">
          <img src="https://randomuser.me/api/portraits/men/85.jpg" className="rounded-circle" id="photo" />  
        </div>	
      </div>
      <div className="col-sm-6">
        <form>
          <label style={{marginTop: 10, color: 'black'}}>John Doe</label>
          <div className="form-group" id="form-profile">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" placeholder="xxx@gmail.com" readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="********" readOnly />
          </div>
          <button type="submit" className="btn btn-primary" id="btnb">Submit</button>
          <button type="reset" className="btn btn-danger" id="btnb">Clear</button>
        </form>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col">
      <div className="container">
        <h3>History Invoice</h3>
        <div className="table-responsive">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Invoice</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>05/12/2017</td>
                <td>#INV05122017-121</td>
                <td><span className="badge badge-pill badge-success">Delivered</span></td>
              </tr>
              <tr>
                <td>05/12/2017</td>
                <td>#INV05122017-004</td>
                <td><span className="badge badge-pill badge-success">Delivered</span></td>
              </tr>
              <tr>
                <td>15/03/2018</td>
                <td>#INV15032018-025</td>
                <td><span className="badge badge-pill badge-warning">On Progress</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
        );
    }
} 

export default Profile;