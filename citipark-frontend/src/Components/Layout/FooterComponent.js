import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import { Link } from 'react-router-dom';
/*import "../App.css"*/

 class FooterComponent extends Component {
   
    render() {
        return (
            <footer className="site-footer">
            <div className="container">
              <div className="row">
               
      
                <div className="col-xs-6 col-md-3">
                  <h6>Address</h6>
                  <small >Shop no. C1-1 to 4, C2-1 to 4, Sarthak Garden, Near Bhagwati Temple, Dhavali, <br />Ponda,Goa,403401</small>
                  <br />
                  <br />
                  <hr className="my-3"/>
                  <h6>Phone No.</h6>
                  <small>7745027822</small>
                  
                </div>
               
                
      
                
              </div>
              <hr />
            </div>
            <div className="container">
              <div className="row">
               
      
                <div className="col-md-4 col-sm-6 col-lg-7">
                  <ul className="social-icons">
                  <li><Link to= {{ pathname: "https://facebook.com" }} className="facebook"  target="_blank"><i className="fa fa-facebook"></i></Link></li>
                    <li><Link  to= {{ pathname: "https://twitter.com" }} className="twitter"  target="_blank"><i className="fa fa-twitter"></i></Link></li>
                    <li><Link to= {{ pathname: "https://linkedin.com" }} className="linkedin"  target="_blank"><i className="fa fa-linkedin"></i></Link></li>
                    <li><Link to= {{ pathname: "https://instagram.com" }} className="instagram"  target="_blank"><i className="fa fa-instagram"></i></Link></li>   
                  </ul>
                </div>
              </div>
            </div>
      </footer>
           
        );
    }
}
export default FooterComponent;