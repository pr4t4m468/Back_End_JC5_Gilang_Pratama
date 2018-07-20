import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

class Invoice extends Component {
    render() {
        return (
           <div>
               <div className="container" align="center">
  <div className="table-responsive" style={{maxWidth: 700, marginTop: 10}}>
    <table className="table table-borderless">
      <thead className="thead bg-primary">
        <tr>
          <th className="col text-center text-light" colSpan={4} style={{padding: 10, fontSize: 30}}>Invoice</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={2}>
            Haneefa <br />
            21, jessika street , <br />
            shennoanagarnagar <br />
            jessika@gmail.com
          </td>
          <td className="text-right"><strong>Date :</strong> 2017-05-04</td>
        </tr>
        <tr>
          <td className="text-right"><strong>Invoice# :</strong> SDO-10035</td>
        </tr>
        <tr>
          <td colSpan={2}>
            <table className="table table-stripped">
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th className="text-center" scope="col">Price</th>
                  <th className="text-center" scope="col">Shipping Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Session with Jessika test</th>
                  <td className="text-right">Rp 60000</td>
                  <td className="text-right">Rp 9000</td>
                </tr>
                <tr>
                  <th scope="row">Promotional Code in</th>
                  <td className="text-right">Rp 60000</td>
                  <td className="text-right">Rp 9000</td>
                </tr>
                <tr> 
                  <th className="text-right" colSpan={3}>Total Rp 138000</th>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

            </div>
        );
    }
} 

export default Invoice;