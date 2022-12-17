import React, { Component } from 'react'

export default class TopMenu extends Component {
  render() {
    return (
        <div className="main_nav_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-right">
              <div className="logo_container">
              <img src="images/logo2.png" alt="" width="180px" height="110px" /> 
              </div>
              <nav className="navbar">
                <ul className="navbar_menu">
                  <li><a href="#">home</a></li>
                  <li><a href="#">shop</a></li>
                  <li><a href="#">promotion</a></li>
                  <li><a href="#">pages</a></li>
                  <li><a href="#">blog</a></li>
                  <li><a href="contact.html">contact</a></li>
                </ul>
                <ul className="navbar_user">
                  <li><a href="#"><i className="fa fa-search" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-user" aria-hidden="true" /></a></li>
                  <li className="checkout">
                    <a href="#">
                      <i className="fa fa-shopping-cart" aria-hidden="true" />
                      <span id="checkout_items" className="checkout_items">2</span>
                    </a>
                  </li>
                </ul>
                <div className="shoe_container">
                  <i className="fa fa-bars" aria-hidden="true" />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
}