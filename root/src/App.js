import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import {Route} from 'react-router-dom';

import Nav from './component/Nav';
import Content from './component/Content';
import Footer from './component/Footer';
import Product from './component/Product';
import ItemDetail from './component/ItemDetail';
import Login from './component/Login';
import Profile from './component/Profile';
import Buy from './component/Buy';
import Checkout from './component/Checkout';
import Invoice from './component/Invoice';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <br/>
        <Route exact path="/" component={Content}/>
        <br/>
        <Route path="/product" component={Product}/>
        <Route path="/item-detail" component={ItemDetail}/>
        <Route path="/login" component={Login}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/buy" component={Buy}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/invoice" component={Invoice}/>
        <br/>
        <br/>
        <br/>
        <Footer/>
      </div>
    );
  }
}

export default App;
