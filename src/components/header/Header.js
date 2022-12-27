import React from "react";
import { Fragment } from "react";
import logo from "../header/logo2.png";
import { Link } from "react-router-dom";
import "../../styles/responsive.css";
import "../../styles/main_styles.css";

export default class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="super_container">
          <header className="header trans_300">
            <div className="top_nav">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="top_nav_left">
                      free shipping on all VietNam orders over 50.000VND
                    </div>
                  </div>
                  <div className="col-md-6 text-right">
                    <div className="top_nav_right">
                      <ul className="top_nav_menu">
                        <li className="currency">
                          <Link>
                            usd
                            <i className="bi bi-chevron-down"></i>
                          </Link>
                          <ul className="currency_selection">
                            <li>
                              <Link>cad</Link>
                            </li>
                            <li>
                              <Link>aud</Link>
                            </li>
                            <li>
                              <Link>eur</Link>
                            </li>
                            <li>
                              <Link>gbp</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="language">
                          <Link>
                            English
                            <i className="bi bi-chevron-down"></i>
                          </Link>
                          <ul className="language_selection">
                            <li>
                              <Link>French</Link>
                            </li>
                            <li>
                              <Link>Italian</Link>
                            </li>
                            <li>
                              <Link>German</Link>
                            </li>
                            <li>
                              <Link>Spanish</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="account">
                          <Link>
                            My Account
                            <i className="bi bi-chevron-down"></i>
                          </Link>
                          <ul className="account_selection">
                            <li>
                              <Link href="../FrontEnd/Login/Login.html">
                                <i
                                  className="bi bi-box-arrow-in-right"
                                  aria-hidden="true"
                                ></i>
                                Sign In
                              </Link>
                            </li>
                            <li>
                              <Link href="../FrontEnd/Registration/Registration.html">
                                <i
                                  className="bi bi-person-fill-add"
                                  aria-hidden="true"
                                ></i>
                                Register
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="main_nav_container">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-right">
                    <div className="logo_container">
                      <Link>
                        <img src={logo} alt="" />
                      </Link>
                    </div>
                    <nav className="navbar">
                      <ul className="navbar_menu">
                        <li>
                          <Link to="/">home</Link>
                        </li>
                        <li>
                          <Link to="/cart">shop</Link>
                        </li>
                        <li>
                          <Link to="/product">Product</Link>
                        </li>
                        <li>
                          <Link to="/category">Category</Link>
                        </li>
                        <li>
                          <Link>blog</Link>
                        </li>
                        <li>
                          <Link href="contact.html">contact</Link>
                        </li>
                      </ul>
                      <ul className="navbar_user">
                        <li>
                          <Link>
                            <i className="bi bi-search " aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <i className="bi bi-person" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li className="checkout">
                          <Link>
                            <i
                              className="bi bi-cart-fill"
                              aria-hidden="true"
                            ></i>
                            <span
                              id="checkout_items"
                              className="checkout_items"
                            >
                              2
                            </span>
                          </Link>
                        </li>
                      </ul>
                      <div className="hamburger_container">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </Fragment>
    );
  }
}
