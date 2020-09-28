import React from 'react';
// import logo from './logo.svg';
// import './App.css';

function Product() {
  return (
<div className="wrapper">
  <div className="preloader" />
  {/* Main Header Nav */}
  <header className="header-nav menu_style_home_one style2 navbar-scrolltofixed stricky main-menu">
    <div className="container-fluid p0">
      {/* Ace Responsive Menu */}
      <nav>
        {/* Menu Toggle btn*/}
        <div className="menu-toggle">
          <img className="nav_logo_img img-fluid" src="images/header-logo.png" alt="header-logo.png" />
          <button type="button" id="menu-btn">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        <a href="#" className="navbar_brand float-left dn-smd">
          <img className="logo1 img-fluid" src="images/header-logo2.png" alt="header-logo.png" />
          <img className="logo2 img-fluid" src="images/header-logo2.png" alt="header-logo2.png" />
          <span>FindHouse</span>
        </a>
        {/* Responsive Menu Structure*/}
        {/*Note: declare the Menu style in the data-menu-style="horizontal" (options: horizontal, vertical, accordion) */}
        <ul id="respMenu" className="ace-responsive-menu text-right" data-menu-style="horizontal">
          <li>
            <a href="#"><span className="title">Home</span></a>
            {/* Level Two*/}
            <ul>
              <li><a href="index-2.html">Home 1</a></li>
              <li><a href="index2.html">Home 2</a></li>
              <li><a href="index3.html">Home 3</a></li>
              <li><a href="index4.html">Home 4</a></li>
              <li><a href="index5.html">Home 5</a></li>
              <li><a href="index6.html">Home 6</a></li>
              <li><a href="index7.html">Home 7</a></li>
              <li><a href="index8.html">Home 8</a></li>
              <li><a href="index9.html">Home 9</a></li>
              <li><a href="index10.html">Home 10</a></li>
            </ul>
          </li>
          <li>
            <a href="#"><span className="title">Listing</span></a>
            {/* Level Two*/}
            <ul>
              <li>
                <a href="#">Listing Grid</a>
                {/* Level Three*/}
                <ul>
                  <li><a href="page-listing-grid-v1.html">Grid v1</a></li>
                  <li><a href="page-listing-grid-v2.html">Grid v2</a></li>
                  <li><a href="page-listing-grid-v3.html">Grid v3</a></li>
                  <li><a href="page-listing-grid-v4.html">Grid v4</a></li>
                  <li><a href="page-listing-grid-v5.html">Grid v5</a></li>
                  <li><a href="page-listing-full-width-grid.html">Grid Fullwidth</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Listing List</a>
                {/* Level Three*/}
                <ul>
                  <li><a href="page-listing-list.html">List V1</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Listing Style</a>
                {/* Level Three*/}
                <ul>
                  <li><a href="page-listing-parallax.html">Parallax Style</a></li>
                  <li><a href="page-listing-slider.html">Slider Style</a></li>
                  <li><a href="page-listing-map.html">Map Header</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Listing Half</a>
                {/* Level Three*/}
                <ul>
                  <li><a href="page-listing-half-map-v1.html">Map V1</a></li>
                  <li><a href="page-listing-half-map-v2.html">Map V2</a></li>
                  <li><a href="page-listing-half-map-v3.html">Map V3</a></li>
                  <li><a href="page-listing-half-map-v4.html">Map V4</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Agent View</a>
                {/* Level Three*/}
                <ul>
                  <li><a href="page-listing-agent-v1.html">Agent V1</a></li>
                  <li><a href="page-listing-agent-v2.html">Agent V2</a></li>
                  <li><a href="page-listing-agent-v3.html">Agent Details</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Agencies View</a>
                {/* Level Three*/}
                <ul>
                  <li><a href="page-listing-agencies-v1.html">Agencies V1</a></li>
                  <li><a href="page-listing-agencies-v2.html">Agencies V2</a></li>
                  <li><a href="page-listing-agencies-v3.html">Agencies Details</a></li>
                </ul>
              </li>
              <li><a href="page-add-new-property.html">Create Listing</a></li>
            </ul>
          </li>
          <li>
            <a href="#"><span className="title">Property</span></a>
            <ul>
              <li>
                <a href="#">User Admin</a>
                <ul>
                  <li><a href="page-dashboard.html">Dashboard</a></li>
                  <li><a href="page-my-properties.html">My Properties</a></li>
                  <li><a href="page-message.html">My Message</a></li>
                  <li><a href="page-my-review.html">My Review</a></li>
                  <li><a href="page-my-favorites.html">My Favorites</a></li>
                  <li><a href="page-add-new-property.html">Add Property</a></li>
                  <li><a href="page-my-profile.html">My Profile</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Listing Single</a>
                {/* Level Three*/}
                <ul>
                  <li><a href="page-listing-single-v1.html">Single V1</a></li>
                  <li><a href="page-listing-single-v2.html">Single V2</a></li>
                  <li><a href="page-listing-single-v3.html">Single V3</a></li>
                  <li><a href="page-listing-single-v4.html">Single V4</a></li>
                  <li><a href="page-listing-single-v5.html">Single V5</a></li>
                </ul>
              </li>
              <li><a href="page-add-new-property.html">Create Listing</a></li>
            </ul>
          </li>
          <li>
            <a href="#"><span className="title">Pages</span></a>
            <ul>
              <li>
                <a href="#"><span className="title">Pages</span></a>
                <ul>
                  <li><a href="page-shop.html">Shop</a></li>
                  <li><a href="page-shop-single.html">Shop Single</a></li>
                  <li><a href="page-shop-cart.html">Cart</a></li>
                  <li><a href="page-shop-checkout.html">Checkout</a></li>
                  <li><a href="page-shop-order.html">Order</a></li>
                </ul>
              </li>
              <li><a href="page-about.html">About Us</a></li>
              <li><a href="page-gallery.html">Gallery</a></li>
              <li><a href="page-faq.html">Faq</a></li>
              <li><a href="page-login.html">LogIn</a></li>
              <li><a href="page-compare.html">Membership</a></li>
              <li><a href="page-compare2.html">Membership 2</a></li>
              <li><a href="page-register.html">Register</a></li>
              <li><a href="page-service.html">Service</a></li>
              <li><a href="page-error.html">404 Page</a></li>
              <li><a href="page-terms.html">Terms and Conditions</a></li>
              <li><a href="page-ui-element.html">UI Elements</a></li>
            </ul>
          </li>
          <li>
            <a href="#"><span className="title">Blog</span></a>
            <ul>
              <li><a href="page-blog-v1.html">Blog List 1</a></li>
              <li><a href="page-blog-grid.html">Blog List 2</a></li>
              <li><a href="page-blog-single.html">Single Post</a></li>
            </ul>
          </li>
          <li className="last">
            <a href="page-contact.html"><span className="title">Contact</span></a>
          </li>
          <li className="list-inline-item list_s"><a href="#" className="btn flaticon-user" data-toggle="modal" data-target=".bd-example-modal-lg"> <span className="dn-lg">Login/Register</span></a></li>
          <li className="list-inline-item add_listing"><a href="page-add-new-property.html"><span className="flaticon-plus" /><span className="dn-lg"> Create Listing</span></a></li>
        </ul>
      </nav>
    </div>
  </header>
  {/* Modal */}
  <div className="sign_up_modal modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
        </div>
        <div className="modal-body container pb20">
          <div className="row">
            <div className="col-lg-12">
              <ul className="sign_up_tab nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Register</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content container" id="myTabContent">
            <div className="row mt25 tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div className="col-lg-6 col-xl-6">
                <div className="login_thumb">
                  <img className="img-fluid w100" src="images/resource/login.jpg" alt="login.jpg" />
                </div>
              </div>
              <div className="col-lg-6 col-xl-6">
                <div className="login_form">
                  <form action="#">
                    <div className="heading">
                      <h4>Login</h4>
                    </div>
                    <div className="row mt25">
                      <div className="col-lg-12">
                        <button type="submit" className="btn btn-fb btn-block"><i className="fa fa-facebook float-left mt5" /> Login with Facebook</button>
                      </div>
                      <div className="col-lg-12">
                        <button type="submit" className="btn btn-googl btn-block"><i className="fa fa-google float-left mt5" /> Login with Google</button>
                      </div>
                    </div>
                    <hr />
                    <div className="input-group mb-2 mr-sm-2">
                      <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="User Name Or Email" />
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="flaticon-user" /></div>
                      </div>
                    </div>
                    <div className="input-group form-group">
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="flaticon-password" /></div>
                      </div>
                    </div>
                    <div className="form-group custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="exampleCheck1" />
                      <label className="custom-control-label" htmlFor="exampleCheck1">Remember me</label>
                      <a className="btn-fpswd float-right" href="#">Lost your password?</a>
                    </div>
                    <button type="submit" className="btn btn-log btn-block btn-thm">Log In</button>
                    <p className="text-center">Don't have an account? <a className="text-thm" href="#">Register</a></p>
                  </form>
                </div>
              </div>
            </div>
            <div className="row mt25 tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div className="col-lg-6 col-xl-6">
                <div className="regstr_thumb">
                  <img className="img-fluid w100" src="images/resource/regstr.jpg" alt="regstr.jpg" />
                </div>
              </div>
              <div className="col-lg-6 col-xl-6">
                <div className="sign_up_form">
                  <div className="heading">
                    <h4>Register</h4>
                  </div>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-12">
                        <button type="submit" className="btn btn-block btn-fb"><i className="fa fa-facebook float-left mt5" /> Login with Facebook</button>
                      </div>
                      <div className="col-lg-12">
                        <button type="submit" className="btn btn-block btn-googl"><i className="fa fa-google float-left mt5" /> Login with Google</button>
                      </div>
                    </div>
                    <hr />
                    <div className="form-group input-group">
                      <input type="text" className="form-control" id="exampleInputName" placeholder="User Name" />
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="flaticon-user" /></div>
                      </div>
                    </div>
                    <div className="form-group input-group">
                      <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email" />
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fa fa-envelope-o" /></div>
                      </div>
                    </div>
                    <div className="form-group input-group">
                      <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="flaticon-password" /></div>
                      </div>
                    </div>
                    <div className="form-group input-group">
                      <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Re-enter password" />
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="flaticon-password" /></div>
                      </div>
                    </div>
                    <div className="form-group ui_kit_select_search mb0">
                      <select className="selectpicker" data-live-search="true" data-width="100%">
                        <option data-tokens="SelectRole">Single User</option>
                        <option data-tokens="Agent/Agency">Agent</option>
                        <option data-tokens="SingleUser">Multi User</option>
                      </select>
                    </div>
                    <div className="form-group custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="exampleCheck2" />
                      <label className="custom-control-label" htmlFor="exampleCheck2">I have read and accept the Terms and Privacy Policy?</label>
                    </div>
                    <button type="submit" className="btn btn-log btn-block btn-thm">Sign Up</button>
                    <p className="text-center">Already have an account? <a className="text-thm" href="#">Log In</a></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Main Header Nav For Mobile */}
  <div id="page" className="stylehome1 h0">
    <div className="mobile-menu">
      <div className="header stylehome1">
        <div className="main_logo_home2 text-center">
          <img className="nav_logo_img img-fluid mt20" src="images/header-logo2.png" alt="header-logo2.png" />
          <span className="mt20">FindHouse</span>
        </div>
        <ul className="menu_bar_home2">
          <li className="list-inline-item list_s"><a href="page-register.html"><span className="flaticon-user" /></a></li>
          <li className="list-inline-item"><a href="#menu"><span /></a></li>
        </ul>
      </div>
    </div>{/* /.mobile-menu */}
    <nav id="menu" className="stylehome1">
      <ul>
        <li><span>Home</span>
          <ul>
            <li><a href="index-2.html">Home 1</a></li>
            <li><a href="index2.html">Home 2</a></li>
            <li><a href="index3.html">Home 3</a></li>
            <li><a href="index4.html">Home 4</a></li>
            <li><a href="index5.html">Home 5</a></li>
            <li><a href="index6.html">Home 6</a></li>
            <li><a href="index7.html">Home 7</a></li>
            <li><a href="index8.html">Home 8</a></li>
            <li><a href="index9.html">Home 9</a></li>
            <li><a href="index10.html">Home 10</a></li>
          </ul>
        </li>
        <li><span>Listing</span>
          <ul>
            <li><span>Listing Grid</span>
              <ul>
                <li><a href="page-listing-grid-v1.html">Grid v1</a></li>
                <li><a href="page-listing-grid-v2.html">Grid v2</a></li>
                <li><a href="page-listing-grid-v3.html">Grid v3</a></li>
                <li><a href="page-listing-grid-v4.html">Grid v4</a></li>
                <li><a href="page-listing-grid-v5.html">Grid v5</a></li>
                <li><a href="page-listing-full-width-grid.html">Grid Fullwidth</a></li>
              </ul>
            </li>
            <li><span>Listing Style</span>
              <ul>
                <li><a href="page-listing-parallax.html">Parallax Style</a></li>
                <li><a href="page-listing-slider.html">Slider Style</a></li>
                <li><a href="page-listing-map.html">Map Header</a></li>
              </ul>
            </li>
            <li><span>Listing Half</span>
              <ul>
                <li><a href="page-listing-half-map-v1.html">Map V1</a></li>
                <li><a href="page-listing-half-map-v2.html">Map V2</a></li>
                <li><a href="page-listing-half-map-v3.html">Map V3</a></li>
                <li><a href="page-listing-half-map-v4.html">Map V4</a></li>
              </ul>
            </li>
            <li><span>Agent View</span>
              <ul>
                <li><a href="page-listing-agent-v1.html">Agent V1</a></li>
                <li><a href="page-listing-agent-v2.html">Agent V2</a></li>
                <li><a href="page-listing-agent-v3.html">Agent Details</a></li>
              </ul>
            </li>
            <li><span>Agencies View</span>
              <ul>
                <li><a href="page-agencies-list-v1.html">Agencies V1</a></li>
                <li><a href="page-agencies-list-v2.html">Agencies V2</a></li>
                <li><a href="page-agencies-list-v3.html">Agencies Details</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><span>Property</span>
          <ul>
            <li><span>Property</span>
              <ul>
                <li><a href="page-dashboard.html">Dashboard</a></li>
                <li><a href="page-my-properties.html">My Properties</a></li>
                <li><a href="page-add-new-property.html">Add New Property</a></li>
              </ul>
            </li>
            <li><span>Listing Single</span>
              <ul>
                <li><a href="page-listing-single-v1.html">Single V1</a></li>
                <li><a href="page-listing-single-v2.html">Single V2</a></li>
                <li><a href="page-listing-single-v3.html">Single V3</a></li>
                <li><a href="page-listing-single-v4.html">Single V4</a></li>
                <li><a href="page-listing-single-v5.html">Single V5</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><span>Blog</span>
          <ul>
            <li><a href="page-blog-v1.html">Blog List 1</a></li>
            <li><a href="page-blog-grid.html">Blog List 2</a></li>
            <li><a href="page-blog-single.html">Single Post</a></li>
          </ul>
        </li>
        <li><span>Pages</span>
          <ul>
            <li><span>Shop</span>
              <ul>
                <li><a href="page-shop.html">Shop</a></li>
                <li><a href="page-shop-single.html">Shop Single</a></li>
                <li><a href="page-shop-cart.html">Cart</a></li>
                <li><a href="page-shop-checkout.html">Checkout</a></li>
                <li><a href="page-shop-order.html">Order</a></li>
              </ul>
            </li>
            <li><a href="page-about.html">About Us</a></li>
            <li><a href="page-gallery.html">Gallery</a></li>
            <li><a href="page-faq.html">Faq</a></li>
            <li><a href="page-login.html">LogIn</a></li>
            <li><a href="page-compare.html">Membership</a></li>
            <li><a href="page-compare2.html">Membership 2</a></li>
            <li><a href="page-register.html">Register</a></li>
            <li><a href="page-service.html">Service</a></li>
            <li><a href="page-error.html">404 Page</a></li>
            <li><a href="page-terms.html">Terms and Conditions</a></li>
            <li><a href="page-ui-element.html">UI Elements</a></li>
          </ul>
        </li>
        <li><a href="page-contact.html">Contact</a></li>
        <li><a href="page-login.html"><span className="flaticon-user" /> Login</a></li>
        <li><a href="page-register.html"><span className="flaticon-edit" /> Register</a></li>
        <li className="cl_btn"><a className="btn btn-block btn-lg btn-thm circle" href="#"><span className="flaticon-plus" /> Create Listing</a></li>
      </ul>
    </nav>
  </div>
  {/* Listing Grid View */}
  <section className="our-listing bgc-f7 pb30-991">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="listing_sidebar">
            <div className="sidebar_content_details style3">
              {/* <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> */}
              <div className="sidebar_listing_list style2 mb0">
                <div className="sidebar_advanced_search_widget">
                  <h4 className="mb25">Advanced Search <a className="filter_closed_btn float-right" href="#"><small>Hide Filter</small> <span className="flaticon-close" /></a></h4>
                  <ul className="sasw_list style2 mb0">
                    <li className="search_area">
                      <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputName1" placeholder="keyword" />
                        <label htmlFor="exampleInputEmail"><span className="flaticon-magnifying-glass" /></label>
                      </div>
                    </li>
                    <li className="search_area">
                      <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputEmail" placeholder="Location" />
                        <label htmlFor="exampleInputEmail"><span className="flaticon-maps-and-flags" /></label>
                      </div>
                    </li>
                    <li>
                      <div className="search_option_two">
                        <div className="candidate_revew_select">
                          <select className="selectpicker w100 show-tick">
                            <option>Status</option>
                            <option>Apartment</option>
                            <option>Bungalow</option>
                            <option>Condo</option>
                            <option>House</option>
                            <option>Land</option>
                            <option>Single Family</option>
                          </select>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="search_option_two">
                        <div className="candidate_revew_select">
                          <select className="selectpicker w100 show-tick">
                            <option>Property Type</option>
                            <option>Apartment</option>
                            <option>Bungalow</option>
                            <option>Condo</option>
                            <option>House</option>
                            <option>Land</option>
                            <option>Single Family</option>
                          </select>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="small_dropdown2">
                        <div id="prncgs" className="btn dd_btn">
                          <span>Price</span>
                          <label htmlFor="exampleInputEmail2"><span className="fa fa-angle-down" /></label>
                        </div>
                        <div className="dd_content2">
                          <div className="pricing_acontent">
                            <input type="text" className="amount" placeholder="$52,239" /> 
                            <input type="text" className="amount2" placeholder="$985,14" />
                            <div className="slider-range" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="search_option_two">
                        <div className="candidate_revew_select">
                          <select className="selectpicker w100 show-tick">
                            <option>Bathrooms</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                          </select>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="search_option_two">
                        <div className="candidate_revew_select">
                          <select className="selectpicker w100 show-tick">
                            <option>Bedrooms</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                          </select>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="search_option_two">
                        <div className="candidate_revew_select">
                          <select className="selectpicker w100 show-tick">
                            <option>Garages</option>
                            <option>Yes</option>
                            <option>No</option>
                            <option>Others</option>
                          </select>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="search_option_two">
                        <div className="candidate_revew_select">
                          <select className="selectpicker w100 show-tick">
                            <option>Year built</option>
                            <option>2013</option>
                            <option>2014</option>
                            <option>2015</option>
                            <option>2016</option>
                            <option>2017</option>
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                          </select>
                        </div>
                      </div>
                    </li>
                    <li className="min_area style2 list-inline-item">
                      <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Min Area" />
                      </div>
                    </li>
                    <li className="max_area list-inline-item">
                      <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputName3" placeholder="Max Area" />
                      </div>
                    </li>
                    <li>
                      <div id="accordion" className="panel-group">
                        <div className="panel">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <a href="#panelBodyRating" className="accordion-toggle link" data-toggle="collapse" data-parent="#accordion"><i className="flaticon-more" /> Advanced features</a>
                            </h4>
                          </div>
                          <div id="panelBodyRating" className="panel-collapse collapse">
                            <div className="panel-body row">
                              <div className="col-lg-12">
                                <ul className="ui_kit_checkbox selectable-list float-left fn-400">
                                  <li>
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                      <label className="custom-control-label" htmlFor="customCheck1">Air Conditioning</label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                      <label className="custom-control-label" htmlFor="customCheck4">Barbeque</label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="customCheck10" />
                                      <label className="custom-control-label" htmlFor="customCheck10">Gym</label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                      <label className="custom-control-label" htmlFor="customCheck5">Microwave</label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="customCheck6" />
                                      <label className="custom-control-label" htmlFor="customCheck6">TV Cable</label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                      <label className="custom-control-label" htmlFor="customCheck2">Lawn</label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="customCheck11" />
                                      <label className="custom-control-label" htmlFor="customCheck11">Refrigerator</label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                      <label className="custom-control-label" htmlFor="customCheck3">Swimming Pool</label>
                                    </div>
                                  </li>
                                </ul>
                                <ul className="ui_kit_checkbox selectable-list float-right fn-400">
                                  <li>
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="customCheck12" />
                                      <label className="custom-control-label" htmlFor="customCheck12">WiFi</label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="customCheck14" />
                                      <label className="custom-control-label" htmlFor="customCheck14">Sauna</label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="customCheck7" />
                                      <label className="custom-control-label" htmlFor="customCheck7">Dryer</label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="customCheck9" />
                                      <label className="custom-control-label" htmlFor="customCheck9">Washer</label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="customCheck13" />
                                      <label className="custom-control-label" htmlFor="customCheck13">Laundry</label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="customCheck8" />
                                      <label className="custom-control-label" htmlFor="customCheck8">Outdoor Shower</label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="customCheck15" />
                                      <label className="custom-control-label" htmlFor="customCheck15">Window Coverings</label>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="search_option_button">
                        <button type="submit" className="btn btn-block btn-thm">Search</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 col-lg-6">
          <div className="breadcrumb_content style2">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active text-thm" aria-current="page">Full Width – Grid View</li>
            </ol>
            <h2 className="breadcrumb_title">Full Width Grid View</h2>
          </div>
        </div>
        <div className="col-md-4 col-lg-6">
          <div className="sidebar_switch text-right">
            <div id="main2">
              <span id="open2" className="flaticon-filter-results-button filter_open_btn"> Show Filter</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="grid_list_search_result style2">
              <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3">
                <div className="left_area">
                  <p>9 Search results</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-9 col-xl-9">
                <div className="right_area style2 text-right">
                  <ul>
                    <li className="list-inline-item"><span className="shrtby">Sort by:</span>
                      <select className="selectpicker show-tick">
                        <option>Featured First</option>
                        <option>Featured 2nd</option>
                        <option>Featured 3rd</option>
                        <option>Featured 4th</option>
                        <option>Featured 5th</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="feat_property home7 style4">
                <div className="thumb">
                  <div className="fp_single_item_slider">
                    <div className="item">
                      <img className="img-whp" src="images/property/fp1.jpg" alt="fp1.jpg" />
                    </div>
                    <div className="item">
                      <img className="img-whp" src="images/property/fp2.jpg" alt="fp2.jpg" />
                    </div>
                  </div>
                  <div className="thmb_cntnt style2">
                    <ul className="tag mb0">
                      <li className="list-inline-item"><a href="#">For Rent</a></li>
                      <li className="list-inline-item"><a href="#">Featured</a></li>
                    </ul>
                  </div>
                  <div className="thmb_cntnt style3">
                    <ul className="icon mb0">
                      <li className="list-inline-item"><a href="#"><span className="flaticon-transfer-1" /></a></li>
                      <li className="list-inline-item"><a href="#"><span className="flaticon-heart" /></a></li>
                    </ul>
                    <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                  </div>
                </div>
                <div className="details">
                  <div className="tc_content">
                    <p className="text-thm">Apartment</p>
                    <h4>Renovated Apartment</h4>
                    <p><span className="flaticon-placeholder" /> 1421 San Pedro St, Los Angeles, CA 90015</p>
                    <ul className="prop_details mb0">
                      <li className="list-inline-item"><a className="text-thm3" href="#">Beds: 4</a></li>
                      <li className="list-inline-item"><a className="text-thm3" href="#">Baths: 2</a></li>
                      <li className="list-inline-item"><a className="text-thm3" href="#">Sq Ft: 5280</a></li>
                    </ul>
                  </div>
                  <div className="fp_footer">
                    <ul className="fp_meta float-left mb0">
                      <li className="list-inline-item"><a href="#"><img src="images/property/pposter1.png" alt="pposter1.png" /></a></li>
                      <li className="list-inline-item"><a href="#">Ali Tufan</a></li>
                    </ul>
                    <div className="fp_pdate float-right">4 years ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feat_property home7 style4">
                <div className="thumb">
                  <div className="fp_single_item_slider">
                    <div className="item">
                      <img className="img-whp" src="images/property/fp2.jpg" alt="fp2.jpg" />
                    </div>
                    <div className="item">
                      <img className="img-whp" src="images/property/fp3.jpg" alt="fp3.jpg" />
                    </div>
                  </div>
                  <div className="thmb_cntnt style2">
                    <ul className="tag mb0">
                      <li className="list-inline-item"><a href="#">For Rent</a></li>
                      <li className="list-inline-item dn" />
                    </ul>
                  </div>
                  <div className="thmb_cntnt style3">
                    <ul className="icon mb0">
                      <li className="list-inline-item"><a href="#"><span className="flaticon-transfer-1" /></a></li>
                      <li className="list-inline-item"><a href="#"><span className="flaticon-heart" /></a></li>
                    </ul>
                    <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                  </div>
                </div>
                <div className="details">
                  <div className="tc_content">
                    <p className="text-thm">Villa</p>
                    <h4>Gorgeous Villa Bay View</h4>
                    <p><span className="flaticon-placeholder" /> 1421 San Pedro St, Los Angeles, CA 90015</p>
                    <ul className="prop_details mb0">
                      <li className="list-inline-item"><a className="text-thm3" href="#">Beds: 4</a></li>
                      <li className="list-inline-item"><a className="text-thm3" href="#">Baths: 2</a></li>
                      <li className="list-inline-item"><a className="text-thm3" href="#">Sq Ft: 5280</a></li>
                    </ul>
                  </div>
                  <div className="fp_footer">
                    <ul className="fp_meta float-left mb0">
                      <li className="list-inline-item"><a href="#"><img src="images/property/pposter1.png" alt="pposter1.png" /></a></li>
                      <li className="list-inline-item"><a href="#">Ali Tufan</a></li>
                    </ul>
                    <div className="fp_pdate float-right">4 years ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feat_property home7 style4">
                <div className="thumb">
                  <div className="fp_single_item_slider">
                    <div className="item">
                      <img className="img-whp" src="images/property/fp3.jpg" alt="fp3.jpg" />
                    </div>
                    <div className="item">
                      <img className="img-whp" src="images/property/fp4.jpg" alt="fp4.jpg" />
                    </div>
                  </div>
                  <div className="thmb_cntnt style2">
                    <ul className="tag mb0">
                      <li className="list-inline-item"><a href="#">For Sale</a></li>
                      <li className="list-inline-item dn" />
                    </ul>
                  </div>
                  <div className="thmb_cntnt style3">
                    <ul className="icon mb0">
                      <li className="list-inline-item"><a href="#"><span className="flaticon-transfer-1" /></a></li>
                      <li className="list-inline-item"><a href="#"><span className="flaticon-heart" /></a></li>
                    </ul>
                    <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                  </div>
                </div>
                <div className="details">
                  <div className="tc_content">
                    <p className="text-thm">Single Family Home</p>
                    <h4>Luxury Family Home</h4>
                    <p><span className="flaticon-placeholder" /> 1421 San Pedro St, Los Angeles, CA 90015</p>
                    <ul className="prop_details mb0">
                      <li className="list-inline-item"><a className="text-thm3" href="#">Beds: 4</a></li>
                      <li className="list-inline-item"><a className="text-thm3" href="#">Baths: 2</a></li>
                      <li className="list-inline-item"><a className="text-thm3" href="#">Sq Ft: 5280</a></li>
                    </ul>
                  </div>
                  <div className="fp_footer">
                    <ul className="fp_meta float-left mb0">
                      <li className="list-inline-item"><a href="#"><img src="images/property/pposter1.png" alt="pposter1.png" /></a></li>
                      <li className="list-inline-item"><a href="#">Ali Tufan</a></li>
                    </ul>
                    <div className="fp_pdate float-right">4 years ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feat_property home7 style4">
                <div className="thumb">
                  <div className="fp_single_item_slider">
                    <div className="item">
                      <img className="img-whp" src="images/property/fp4.jpg" alt="fp4.jpg" />
                    </div>
                    <div className="item">
                      <img className="img-whp" src="images/property/fp5.jpg" alt="fp5.jpg" />
                    </div>
                  </div>
                  <div className="thmb_cntnt style2">
                    <ul className="tag mb0">
                      <li className="list-inline-item"><a href="#">For Rent</a></li>
                      <li className="list-inline-item"><a href="#">Featured</a></li>
                    </ul>
                  </div>
                  <div className="thmb_cntnt style3">
                    <ul className="icon mb0">
                      <li className="list-inline-item"><a href="#"><span className="flaticon-transfer-1" /></a></li>
                      <li className="list-inline-item"><a href="#"><span className="flaticon-heart" /></a></li>
                    </ul>
                    <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                  </div>
                </div>
                <div className="details">
                  <div className="tc_content">
                    <p className="text-thm">Apartment</p>
                    <h4>Luxury Family Home</h4>
                    <p><span className="flaticon-placeholder" /> 1421 San Pedro St, Los Angeles, CA 90015</p>
                    <ul className="prop_details mb0">
                      <li className="list-inline-item"><a className="text-thm3" href="#">Beds: 4</a></li>
                      <li className="list-inline-item"><a className="text-thm3" href="#">Baths: 2</a></li>
                      <li className="list-inline-item"><a className="text-thm3" href="#">Sq Ft: 5280</a></li>
                    </ul>
                  </div>
                  <div className="fp_footer">
                    <ul className="fp_meta float-left mb0">
                      <li className="list-inline-item"><a href="#"><img src="images/property/pposter1.png" alt="pposter1.png" /></a></li>
                      <li className="list-inline-item"><a href="#">Ali Tufan</a></li>
                    </ul>
                    <div className="fp_pdate float-right">4 years ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feat_property home7 style4">
                <div className="thumb">
                  <div className="fp_single_item_slider">
                    <div className="item">
                      <img className="img-whp" src="images/property/fp15.jpg" alt="fp15.jpg" />
                    </div>
                    <div className="item">
                      <img className="img-whp" src="images/property/fp16.jpg" alt="fp16.jpg" />
                    </div>
                  </div>
                  <div className="thmb_cntnt style2">
                    <ul className="tag mb0">
                      <li className="list-inline-item"><a href="#">For Rent</a></li>
                      <li className="list-inline-item"><a href="#">Featured</a></li>
                    </ul>
                  </div>
                  <div className="thmb_cntnt style3">
                    <ul className="icon mb0">
                      <li className="list-inline-item"><a href="#"><span className="flaticon-transfer-1" /></a></li>
                      <li className="list-inline-item"><a href="#"><span className="flaticon-heart" /></a></li>
                    </ul>
                    <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                  </div>
                </div>
                <div className="details">
                  <div className="tc_content">
                    <p className="text-thm">Apartment</p>
                    <h4>Renovated Apartment</h4>
                    <p><span className="flaticon-placeholder" /> 1421 San Pedro St, Los Angeles, CA 90015</p>
                    <ul className="prop_details mb0">
                      <li className="list-inline-item"><a className="text-thm3" href="#">Beds: 4</a></li>
                      <li className="list-inline-item"><a className="text-thm3" href="#">Baths: 2</a></li>
                      <li className="list-inline-item"><a className="text-thm3" href="#">Sq Ft: 5280</a></li>
                    </ul>
                  </div>
                  <div className="fp_footer">
                    <ul className="fp_meta float-left mb0">
                      <li className="list-inline-item"><a href="#"><img src="images/property/pposter1.png" alt="pposter1.png" /></a></li>
                      <li className="list-inline-item"><a href="#">Ali Tufan</a></li>
                    </ul>
                    <div className="fp_pdate float-right">4 years ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feat_property home7 style4">
                <div className="thumb">
                  <div className="fp_single_item_slider">
                    <div className="item">
                      <img className="img-whp" src="images/property/fp16.jpg" alt="fp16.jpg" />
                    </div>
                    <div className="item">
                      <img className="img-whp" src="images/property/fp17.jpg" alt="fp17.jpg" />
                    </div>
                  </div>
                  <div className="thmb_cntnt style2">
                    <ul className="tag mb0">
                      <li className="list-inline-item"><a href="#">For Rent</a></li>
                      <li className="list-inline-item dn" />
                    </ul>
                  </div>
                  <div className="thmb_cntnt style3">
                    <ul className="icon mb0">
                      <li className="list-inline-item"><a href="#"><span className="flaticon-transfer-1" /></a></li>
                      <li className="list-inline-item"><a href="#"><span className="flaticon-heart" /></a></li>
                    </ul>
                    <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                  </div>
                </div>
                <div className="details">
                  <div className="tc_content">
                    <p className="text-thm">Villa</p>
                    <h4>Gorgeous Villa Bay View</h4>
                    <p><span className="flaticon-placeholder" /> 1421 San Pedro St, Los Angeles, CA 90015</p>
                    <ul className="prop_details mb0">
                      <li className="list-inline-item"><a className="text-thm3" href="#">Beds: 4</a></li>
                      <li className="list-inline-item"><a className="text-thm3" href="#">Baths: 2</a></li>
                      <li className="list-inline-item"><a className="text-thm3" href="#">Sq Ft: 5280</a></li>
                    </ul>
                  </div>
                  <div className="fp_footer">
                    <ul className="fp_meta float-left mb0">
                      <li className="list-inline-item"><a href="#"><img src="images/property/pposter1.png" alt="pposter1.png" /></a></li>
                      <li className="list-inline-item"><a href="#">Ali Tufan</a></li>
                    </ul>
                    <div className="fp_pdate float-right">4 years ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feat_property home7 style4">
                <div className="thumb">
                  <div className="fp_single_item_slider">
                    <div className="item">
                      <img className="img-whp" src="images/property/fp17.jpg" alt="fp17.jpg" />
                    </div>
                    <div className="item">
                      <img className="img-whp" src="images/property/fp18.jpg" alt="fp18.jpg" />
                    </div>
                  </div>
                  <div className="thmb_cntnt style2">
                    <ul className="tag mb0">
                      <li className="list-inline-item"><a href="#">For Sale</a></li>
                      <li className="list-inline-item dn" />
                    </ul>
                  </div>
                  <div className="thmb_cntnt style3">
                    <ul className="icon mb0">
                      <li className="list-inline-item"><a href="#"><span className="flaticon-transfer-1" /></a></li>
                      <li className="list-inline-item"><a href="#"><span className="flaticon-heart" /></a></li>
                    </ul>
                    <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                  </div>
                </div>
                <div className="details">
                  <div className="tc_content">
                    <p className="text-thm">Single Family Home</p>
                    <h4>Luxury Family Home</h4>
                    <p><span className="flaticon-placeholder" /> 1421 San Pedro St, Los Angeles, CA 90015</p>
                    <ul className="prop_details mb0">
                      <li className="list-inline-item"><a className="text-thm3" href="#">Beds: 4</a></li>
                      <li className="list-inline-item"><a className="text-thm3" href="#">Baths: 2</a></li>
                      <li className="list-inline-item"><a className="text-thm3" href="#">Sq Ft: 5280</a></li>
                    </ul>
                  </div>
                  <div className="fp_footer">
                    <ul className="fp_meta float-left mb0">
                      <li className="list-inline-item"><a href="#"><img src="images/property/pposter1.png" alt="pposter1.png" /></a></li>
                      <li className="list-inline-item"><a href="#">Ali Tufan</a></li>
                    </ul>
                    <div className="fp_pdate float-right">4 years ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feat_property home7 style4">
                <div className="thumb">
                  <div className="fp_single_item_slider">
                    <div className="item">
                      <img className="img-whp" src="images/property/fp18.jpg" alt="fp18.jpg" />
                    </div>
                    <div className="item">
                      <img className="img-whp" src="images/property/fp19.jpg" alt="fp19.jpg" />
                    </div>
                  </div>
                  <div className="thmb_cntnt style2">
                    <ul className="tag mb0">
                      <li className="list-inline-item"><a href="#">For Rent</a></li>
                      <li className="list-inline-item"><a href="#">Featured</a></li>
                    </ul>
                  </div>
                  <div className="thmb_cntnt style3">
                    <ul className="icon mb0">
                      <li className="list-inline-item"><a href="#"><span className="flaticon-transfer-1" /></a></li>
                      <li className="list-inline-item"><a href="#"><span className="flaticon-heart" /></a></li>
                    </ul>
                    <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                  </div>
                </div>
                <div className="details">
                  <div className="tc_content">
                    <p className="text-thm">Apartment</p>
                    <h4>Luxury Family Home</h4>
                    <p><span className="flaticon-placeholder" /> 1421 San Pedro St, Los Angeles, CA 90015</p>
                    <ul className="prop_details mb0">
                      <li className="list-inline-item"><a className="text-thm3" href="#">Beds: 4</a></li>
                      <li className="list-inline-item"><a className="text-thm3" href="#">Baths: 2</a></li>
                      <li className="list-inline-item"><a className="text-thm3" href="#">Sq Ft: 5280</a></li>
                    </ul>
                  </div>
                  <div className="fp_footer">
                    <ul className="fp_meta float-left mb0">
                      <li className="list-inline-item"><a href="#"><img src="images/property/pposter1.png" alt="pposter1.png" /></a></li>
                      <li className="list-inline-item"><a href="#">Ali Tufan</a></li>
                    </ul>
                    <div className="fp_pdate float-right">4 years ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feat_property home7 style4">
                <div className="thumb">
                  <div className="fp_single_item_slider">
                    <div className="item">
                      <img className="img-whp" src="images/property/fp19.jpg" alt="fp19.jpg" />
                    </div>
                    <div className="item">
                      <img className="img-whp" src="images/property/fp20.jpg" alt="fp20.jpg" />
                    </div>
                  </div>
                  <div className="thmb_cntnt style2">
                    <ul className="tag mb0">
                      <li className="list-inline-item"><a href="#">For Rent</a></li>
                      <li className="list-inline-item dn" />
                    </ul>
                  </div>
                  <div className="thmb_cntnt style3">
                    <ul className="icon mb0">
                      <li className="list-inline-item"><a href="#"><span className="flaticon-transfer-1" /></a></li>
                      <li className="list-inline-item"><a href="#"><span className="flaticon-heart" /></a></li>
                    </ul>
                    <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                  </div>
                </div>
                <div className="details">
                  <div className="tc_content">
                    <p className="text-thm">Apartment</p>
                    <h4>Renovated Apartment</h4>
                    <p><span className="flaticon-placeholder" /> 1421 San Pedro St, Los Angeles, CA 90015</p>
                    <ul className="prop_details mb0">
                      <li className="list-inline-item"><a className="text-thm3" href="#">Beds: 4</a></li>
                      <li className="list-inline-item"><a className="text-thm3" href="#">Baths: 2</a></li>
                      <li className="list-inline-item"><a className="text-thm3" href="#">Sq Ft: 5280</a></li>
                    </ul>
                  </div>
                  <div className="fp_footer">
                    <ul className="fp_meta float-left mb0">
                      <li className="list-inline-item"><a href="#"><img src="images/property/pposter1.png" alt="pposter1.png" /></a></li>
                      <li className="list-inline-item"><a href="#">Ali Tufan</a></li>
                    </ul>
                    <div className="fp_pdate float-right">4 years ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mt20">
              <div className="mbp_pagination">
                <ul className="page_navigation">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex={-1} aria-disabled="true"> <span className="flaticon-left-arrow" /> Prev</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">...</a></li>
                  <li className="page-item"><a className="page-link" href="#">29</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#"><span className="flaticon-right-arrow" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Footer */}
  <section className="footer_one zi-1">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
          <div className="footer_about_widget">
            <h4>About Site</h4>
            <p>We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you love. So let’s do this, together.</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <div className="footer_qlink_widget">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">User’s Guide</a></li>
              <li><a href="#">Support Center</a></li>
              <li><a href="#">Press Info</a></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <div className="footer_contact_widget">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li><a href="#"><span className="__cf_email__" data-cfemail="4821262e27082e21262c20273d3b2d662b2725">[email&nbsp;protected]</span></a></li>
              <li><a href="#">Collins Street West, Victoria</a></li>
              <li><a href="#">8007, Australia.</a></li>
              <li><a href="#">+1 246-345-0699</a></li>
              <li><a href="#">+1 246-345-0695</a></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <div className="footer_social_widget">
            <h4>Follow us</h4>
            <ul className="mb30">
              <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
              <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
              <li className="list-inline-item"><a href="#"><i className="fa fa-instagram" /></a></li>
              <li className="list-inline-item"><a href="#"><i className="fa fa-pinterest" /></a></li>
              <li className="list-inline-item"><a href="#"><i className="fa fa-dribbble" /></a></li>
              <li className="list-inline-item"><a href="#"><i className="fa fa-google" /></a></li>
            </ul>
            <h4>Subscribe</h4>
            <form className="footer_mailchimp_form">
              <div className="form-row align-items-center">
                <div className="col-auto">
                  <input type="email" className="form-control mb-2" id="inlineFormInput" placeholder="Your email" />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary mb-2"><i className="fa fa-angle-right" /></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Footer Bottom Area */}
  <section className="footer_middle_area pt40 pb40 zi-1">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xl-6">
          <div className="footer_menu_widget">
            <ul>
              <li className="list-inline-item"><a href="#">Home</a></li>
              <li className="list-inline-item"><a href="#">Listing</a></li>
              <li className="list-inline-item"><a href="#">Property</a></li>
              <li className="list-inline-item"><a href="#">Pages</a></li>
              <li className="list-inline-item"><a href="#">Blog</a></li>
              <li className="list-inline-item"><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-xl-6">
          <div className="copyright-widget text-right">
            <p>© 2020 Find House. Made with love.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  );
}

export default Product;