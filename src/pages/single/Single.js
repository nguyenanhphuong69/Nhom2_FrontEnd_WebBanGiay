import React from 'react'
import './single_responsive.css';
import './single_styles.css';
const Single = () => {
  return (
    <div>
        <div className="container single_product_container">
          <div className="row">
            <div className="col">
              {/* Breadcrumbs */}
              <div className="breadcrumbs d-flex flex-row align-items-center">
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="categories.html"><i className="fa fa-angle-right" aria-hidden="true" />Men's</a></li>
                  <li className="active"><a href="#"><i className="fa fa-angle-right" aria-hidden="true" />Single Product</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="single_product_pics">
                <div className="row">
                  <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                    <div className="single_product_thumbnails">
                      <ul>
                        <li><img src="images/single_1_thumb.jpg" alt="" data-image="images/single_1.jpg" /></li>
                        <li className="active"><img src="images/single_2_thumb.jpg" alt="" data-image="images/single_2.jpg" /></li>
                        <li><img src="images/single_3_thumb.jpg" alt="" data-image="images/single_3.jpg" /></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-9 image_col order-lg-2 order-1">
                    <div className="single_product_image">
                      <div className="single_product_image_background" style={{backgroundImage: 'url(images/single_2.jpg)'}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="product_details">
                <div className="product_details_title">
                  <h2>Pocket cotton sweatshirt</h2>
                  <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
                </div>
                <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
                  <span className="ti-truck" /><span>free delivery</span>
                </div>
                <div className="original_price">$629.99</div>
                <div className="product_price">$495.00</div>
                <ul className="star_rating">
                  <li><i className="fa fa-star" aria-hidden="true" /></li>
                  <li><i className="fa fa-star" aria-hidden="true" /></li>
                  <li><i className="fa fa-star" aria-hidden="true" /></li>
                  <li><i className="fa fa-star" aria-hidden="true" /></li>
                  <li><i className="fa fa-star-o" aria-hidden="true" /></li>
                </ul>
                <div className="product_color">
                  <span>Select Color:</span>
                  <ul>
                    <li style={{background: '#e54e5d'}} />
                    <li style={{background: '#252525'}} />
                    <li style={{background: '#60b3f3'}} />
                  </ul>
                </div>
                <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                  <span>Quantity:</span>
                  <div className="quantity_selector">
                    <span className="minus"><i className="fa fa-minus" aria-hidden="true" /></span>
                    <span id="quantity_value">1</span>
                    <span className="plus"><i className="fa fa-plus" aria-hidden="true" /></span>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                  <div className="product_favorite d-flex flex-column align-items-center justify-content-center" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tabs */}
        <div className="tabs_section_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="tabs_container">
                  <ul className="tabs d-flex flex-sm-row flex-column align-items-left align-items-md-center justify-content-center">
                    <li className="tab active" data-active-tab="tab_1"><span>Description</span></li>
                    <li className="tab" data-active-tab="tab_2"><span>Additional Information</span></li>
                    <li className="tab" data-active-tab="tab_3"><span>Reviews (2)</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {/* Tab Description */}
                <div id="tab_1" className="tab_container active">
                  <div className="row">
                    <div className="col-lg-5 desc_col">
                      <div className="tab_title">
                        <h4>Description</h4>
                      </div>
                      <div className="tab_text_block">
                        <h2>Pocket cotton sweatshirt</h2>
                        <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
                      </div>
                      <div className="tab_image">
                        <img src="images/desc_1.jpg" alt="" />
                      </div>
                      <div className="tab_text_block">
                        <h2>Pocket cotton sweatshirt</h2>
                        <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
                      </div>
                    </div>
                    <div className="col-lg-5 offset-lg-2 desc_col">
                      <div className="tab_image">
                        <img src="images/desc_2.jpg" alt="" />
                      </div>
                      <div className="tab_text_block">
                        <h2>Pocket cotton sweatshirt</h2>
                        <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
                      </div>
                      <div className="tab_image desc_last">
                        <img src="images/desc_3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Tab Additional Info */}
                <div id="tab_2" className="tab_container">
                  <div className="row">
                    <div className="col additional_info_col">
                      <div className="tab_title additional_info_title">
                        <h4>Additional Information</h4>
                      </div>
                      <p>COLOR:<span>Gold, Red</span></p>
                      <p>SIZE:<span>L,M,XL</span></p>
                    </div>
                  </div>
                </div>
                {/* Tab Reviews */}
                <div id="tab_3" className="tab_container">
                  <div className="row">
                    {/* User Reviews */}
                    <div className="col-lg-6 reviews_col">
                      <div className="tab_title reviews_title">
                        <h4>Reviews (2)</h4>
                      </div>
                      {/* User Review */}
                      <div className="user_review_container d-flex flex-column flex-sm-row">
                        <div className="user">
                          <div className="user_pic" />
                          <div className="user_rating">
                            <ul className="star_rating">
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star-o" aria-hidden="true" /></li>
                            </ul>
                          </div>
                        </div>
                        <div className="review">
                          <div className="review_date">27 Aug 2016</div>
                          <div className="user_name">Brandon William</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                      {/* User Review */}
                      <div className="user_review_container d-flex flex-column flex-sm-row">
                        <div className="user">
                          <div className="user_pic" />
                          <div className="user_rating">
                            <ul className="star_rating">
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star-o" aria-hidden="true" /></li>
                            </ul>
                          </div>
                        </div>
                        <div className="review">
                          <div className="review_date">27 Aug 2016</div>
                          <div className="user_name">Brandon William</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                    </div>
                    {/* Add Review */}
                    <div className="col-lg-6 add_review_col">
                      <div className="add_review">
                        <form id="review_form" action="post">
                          <div>
                            <h1>Add Review</h1>
                            <input id="review_name" className="form_input input_name" type="text" name="name" placeholder="Name*" required="required" data-error="Name is required." />
                            <input id="review_email" className="form_input input_email" type="email" name="email" placeholder="Email*" required="required" data-error="Valid email is required." />
                          </div>
                          <div>
                            <h1>Your Rating:</h1>
                            <ul className="user_star_rating">
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star-o" aria-hidden="true" /></li>
                            </ul>
                            <textarea id="review_message" className="input_review" name="message" placeholder="Your Review" rows={4} required data-error="Please, leave us a review." defaultValue={""} />
                          </div>
                          <div className="text-left text-sm-right">
                            <button id="review_submit" type="submit" className="red_button review_submit_btn trans_300" value="Submit">submit</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Single