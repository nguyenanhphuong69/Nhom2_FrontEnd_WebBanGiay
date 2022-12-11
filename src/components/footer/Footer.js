import React from "react";
import { Fragment } from "react";
import "../../styles/responsive.css";
import "../../styles/main_styles.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Fragment>
      <div class="super_container">
        <div class="newsletter">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="newsletter_text d-flex flex-column justify-content-center align-items-lg-start align-items-md-center text-center">
                  <h4>Newsletter</h4>
                  <p>
                    Subscribe to our newsletter and get 20% off your first
                    purchase
                  </p>
                </div>
              </div>
              <div class="col-lg-6">
                <form action="post">
                  <div class="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-lg-end justify-content-center">
                    <input
                      id="newsletter_email"
                      type="email"
                      placeholder="Your email"
                      required="required"
                      data-error="Valid email is required."
                    />
                    <button
                      id="newsletter_submit"
                      type="submit"
                      class="newsletter_submit_btn trans_300"
                      value="Submit"
                    >
                      subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
                  <ul class="footer_nav">
                    <li>
                      <Link href="#">Blog</Link>
                    </li>
                    <li>
                      <Link href="#">FAQs</Link>
                    </li>
                    <li>
                      <Link href="contact.html">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
                  <ul>
                    <li>
                      <Link href="" className="me-4 text-reset">
                        <i class="bi bi-facebook" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="me-4 text-reset">
                        <i class="bi bi-twitter" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="me-4 text-reset">
                        <i class="bi bi-google" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="me-4 text-reset">
                        <i class="bi bi-instagram" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="me-4 text-reset">
                        <i class="bi bi-linkedin" aria-hidden="true"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="footer_nav_container">
                  <div class="cr">
                    ©2022 All Rights Reserverd. Made with{" "}
                    <i class="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                    <Link href="#">Nhóm 2</Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default Footer;
