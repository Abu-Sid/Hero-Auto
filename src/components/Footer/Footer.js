import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <div id='contacts' className="w-100 footer-bg mt-5 footer">
        <footer className="page-footer font-small  pt-4 ">
          <div className="container text-center text-md-left">
            <div className="row">
              <div className="col-md-4 mx-auto mt-5">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                  Address
                </h5>
                <pre className="text">
                  H#340,Road#24,Sector#2 <br />
                  Gulshan-1, Dhaka, Bangladesh <br />
                  Phone: 018XXXXXXXXXX <br />
                  E-mail: info@company.com{" "}
                </pre>
              </div>

              <hr className="clearfix w-100 d-md-none" />
              <div className="col-md-2 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                  Company
                </h5>

                <ul className="list-unstyled">
                  <li>About</li>
                  <li>Site Map</li>
                  <li>Supporting Center</li>
                  <li>Terms Conditions</li>
                  <li>Submit Listing</li>
                </ul>
              </div>

              <hr class="clearfix w-100 d-md-none" />
              <div class="col-md-2 mx-auto">
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">
                  Quick Links
                </h5>

                <ul class="list-unstyled">
                  <li>Quick Links</li>
                  <li>Rentals</li>
                  <li>Sales</li>
                  <li>Contact</li>
                  <li>Terms Conditions</li>
                  <li>Our blog</li>
                </ul>
              </div>

              <hr class="clearfix w-100 d-md-none" />
              <div class="col-md-2 mx-auto">
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">
                  About us
                </h5>
                <ul class="list-unstyled">
                  <li>
                    Hero Car Care is the Bangladesh Best Auto Care Center . Any
                    Inquiry available to answer any questions 24/7
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="blockquote text-center pt-5 pb-">
            {" "}
            © {new Date().getFullYear()}, Abu Sid - All rights reserved
          </p>
        </footer>
      </div>
    );
};

export default Footer;
