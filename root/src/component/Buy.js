import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

class Buy extends Component {
    render() {
        return (
           <div>
               <div className="container" id="tbcart">
  <div className="table-responsive">
    <table className="table table-striped table-dark table-bordered">
      <tbody>
        <tr>
          <th>Item</th>
          <th>QTY</th>
          <th>Unit Price</th>
          <th>Total Price</th>
        </tr>
        <tr>
          <td>Lorem Ipsum</td>
          <td className="text-right" id="qty"><input type="number" id="editqty" style={{width: 45, padding: 1}} defaultValue={1} min={1} /></td>
          <td className="text-right" id="price">Rp 60000</td>
          <td id="price_sub" />
        </tr>
        <tr>
          <th colSpan={3}><span className="pull-right">Sub Total</span></th>
          <th className="text-right" id="subtotal">Rp 60.000</th>
        </tr>
        <tr>
          <th colSpan={3}><span className="pull-right">Shipping</span></th>
          <th className="text-right" id="shipping">Rp 9.000</th>
        </tr>
        <tr>
          <th colSpan={3}><span className="pull-right">Total</span></th>
          <th className="text-right" id="total">Rp 69.000</th>
        </tr>
        <tr>
          <td><Link to="/product" className="btn btn-primary">Continue</Link></td>
          <td colSpan={3}><Link to="/checkout" id="checkout" className="float-right btn btn-success">Checkout</Link></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

            </div>
        );
    }
} 

export default Buy;