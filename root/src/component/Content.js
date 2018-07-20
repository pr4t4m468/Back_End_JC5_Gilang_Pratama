import React, { Component } from 'react';
import img_brand from './../img/logo2.png';

class Content extends Component {
    render() {
        return (
           <div>
               <header className="py-5 bg-image-full" id="bg-cover">
          <img className="img-fluid d-block mx-auto" id="logo-cover" src={img_brand} alt="" />
        </header>
        <div className="container">
          <h1 className="judul">PROMO PREDO</h1>
          <hr id="promo" /><br />
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 1</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 2</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 3</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
          <br />
          
          <div className="row">
            
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 1</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 2</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 3</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <section id="product">
          <div className="container">
            <h1 className="text-right judul">PRODUCT SHOWCASE</h1>
            <hr align="right" /><br />
            <div className="row">
              <div className="card-group">                
                <div className="card">
                  <img className="card-img-top" src="http://placehold.it/240x200&text=Product" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <span className="badge float-right badge-primary">Rp 99.000,-</span>
                  </div>
                </div>
                
                <div className="card">
                  <img className="card-img-top" src="http://placehold.it/240x200&text=Product" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <span className="badge float-right badge-primary">Rp 99.000,-</span>
                  </div>
                </div>
                
                <div className="card">
                  <img className="card-img-top" src="http://placehold.it/240x200&text=Product" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> 
                    <span className="badge float-right badge-primary">Rp 99.000,-</span>
                  </div>
                </div>
                
                <div className="card">
                  <img className="card-img-top" src="http://placehold.it/240x200&text=Product" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <span className="badge float-right badge-primary">Rp 99.000,-</span>
                  </div>
                </div>
                
                <div className="card">
                  <img className="card-img-top" src="http://placehold.it/240x200&text=Product" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <span className="badge float-right badge-primary">Rp 99.000,-</span>
                  </div>
                </div>
                
                <div className="card">
                  <img className="card-img-top" src="http://placehold.it/240x200&text=Product" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> 
                    <span className="badge float-right badge-primary">Rp 99.000,-</span>
                  </div>
                </div>
              </div>
              <br />
            </div>
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
              </ul>
            </nav>
          </div>
        </section>
            </div>
        );
    }
} 

export default Content;