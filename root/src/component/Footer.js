import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
           <div>
               <footer className ="bg-dark fixed-bottom">
                    <div className ="container">
                        <label className ="text-left"> &copy; Copyright 2018 | Purwadhika JC Batch 5 </label>
                    </div>
                 </footer>
            </div>
        );
    }
} 

export default Footer;