import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import img_brand from './../img/logo2.png';

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link to="navbar-brand" to="/"><img id="logo" src="img/logo2.png" alt=""/></Link>
                    <img id="logo" src={img_brand} alt=""/>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product">Product List</Link>
                            </li>
                        </ul>
                        <div className="btn-group" id="login-button" role="group" aria-label="Basic example">
                            <Link to="/login" className="btn btn-outline-success">Sign in</Link>

                            <Link to="/login" className="btn btn-outline-primary">Sign up</Link>
                        </div>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                            <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
} 

export default Nav;