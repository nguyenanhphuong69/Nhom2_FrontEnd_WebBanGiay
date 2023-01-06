import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <div className="top_nav">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="top_nav_left">free shipping on all u.s orders over $50</div>
            </div>
            <div className="col-md-6 text-right">
              <div className="top_nav_right">
                <ul className="top_nav_menu">
                  {/* Currency / Language / My Account */}
                  <li className="currency">
                    <a href="#">
                      usd
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="currency_selection">
                      <li><a href="#">cad</a></li>
                      <li><a href="#">aud</a></li>
                      <li><a href="#">eur</a></li>
                      <li><a href="#">gbp</a></li>
                    </ul>
                  </li>
                  <li className="language">
                    <a href="#">
                      English
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="language_selection">
                      <li><a href="#">French</a></li>
                      <li><a href="#">Italian</a></li>
                      <li><a href="#">German</a></li>
                      <li><a href="#">Spanish</a></li>
                    </ul>
                  </li>
                  <li className="account">
                    <a href="#">
                      My Account
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="account_selection">
                      <li><a href="../FrontEnd/Login/Login.html"><i className="fa fa-sign-in" aria-hidden="true" />Sign In</a></li>
                      <li><a href="../FrontEnd/Registration/Registration.html"><i className="fa fa-user-plus" aria-hidden="true" />Register</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
