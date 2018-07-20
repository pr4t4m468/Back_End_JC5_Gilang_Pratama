import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

class Login extends Component {
    render() {
        return (
           <div>
               <div className="container" id="form1">
  {/* Sign in */}
  <div className="row">
    <div className="col">
      <form>
        <div className="form-group">
          <label>Sign In</label>
          <br />
          <label htmlFor="formGroupExampleInput">Email</label>
          <input type="email" className="form-control" id="formGroupExampleInput" placeholder="Input email" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Password</label>
          <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Input password" />
        </div>
        <Link to="/profile" className="btn btn-outline-primary float-right">Login</Link>
      </form>
    </div>
    {/* Register */}
    <div className="col">
      <form>
        <div className="form-group">
          <label>Sign Up</label>
          <br />
          <label htmlFor="formGroupExampleInput">Email</label>
          <input type="email" className="form-control" id="formGroupExampleInput" placeholder="Input email" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Password</label>
          <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Input password" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Re-enter password</label>
          <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Input password" />
        </div>
        <input type="submit" className="btn btn-outline-primary float-right" defaultValue="Sign Up" />
        <input type="reset" id="button-daftar" className="btn btn-outline-danger float-right" defaultValue="Clear" />
      </form>
    </div>
  </div>
</div>

            </div>
        );
    }
} 

export default Login;