import React from 'react';

import Footer from './Footer';
import List1 from './List1';
import Navbarpc from './Navbarpc';
import Navbarmobile from './Navbarmobile';


const List =()=> {
    return (
        <div className="wrapper">
  <div className="preloader" />
  <Navbarpc />
  <Navbarmobile />

  {/* Listing Grid View */}
  <section className="our-listing bgc-f7 pb30-991">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="listing_sidebar dn db-991">
            <div className="sidebar_content_details style3">

            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="breadcrumb_content style2 mb0-991">
            <h2 className="breadcrumb_title">รายการ</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="listing_list_style mb20-xsd tal-991">
            <ul className="mb0">
              <li className="list-inline-item"><a href="#"><span className="fa fa-th-large" /></a></li>
              <li className="list-inline-item"><a href="#"><span className="fa fa-th-list" /></a></li>
            </ul>
          </div>
          <div className="dn db-991 mt30 mb0">
            <div id="main2">
              <span id="open2" className="flaticon-filter-results-button filter_open_btn style2"> Show Filter</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-xl-4">
          <div className="sidebar_listing_grid1 dn-991">
            <div className="sidebar_listing_list">
              <div className="sidebar_advanced_search_widget">
                <ul className="sasw_list mb0">
                  <li className="search_area">
                    <div className="form-group">
                      <input type="text" className="form-control" id="exampleInputEmail" placeholder="จังหวัด" />
                      <label htmlFor="exampleInputEmail"><span className="flaticon-maps-and-flags" /></label>
                    </div>
                  </li>
                  <li>
                    <div className="search_option_two">
                      <div className="candidate_revew_select">
                        <select className="selectpicker w100 show-tick">
                          <option>ประเภท</option>
                          <option>บ้าน</option>
                          <option>คอนโด</option>
                          <option>ทาวน์เฮาส์</option>
                          <option>ตึกพาณิชย์</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="small_dropdown2">
                      <div id="prncgs2" className="btn dd_btn">
                        <span>ราคา</span>
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
                    <div className="search_option_button">
                      <button type="submit" className="btn btn-block btn-thm">ค้นหา</button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="terms_condition_widget">
              <h4 className="title">Featured Properties</h4>
              <div className="sidebar_feature_property_slider">
                <div className="item">
                  <div className="feat_property home7">
                    <div className="thumb">
                      <img className="img-whp" src="images/property/fp1.jpg" alt="fp1.jpg" />
                      <div className="thmb_cntnt">
                        <ul className="tag mb0">
                          <li className="list-inline-item"><a href="#">For Rent</a></li>
                          <li className="list-inline-item"><a href="#">Featured</a></li>
                        </ul>
                        <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                        <h4 className="posr color-white">Renovated Apartment</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="feat_property home7">
                    <div className="thumb">
                      <img className="img-whp" src="images/property/fp2.jpg" alt="fp2.jpg" />
                      <div className="thmb_cntnt">
                        <ul className="tag mb0">
                          <li className="list-inline-item"><a href="#">For Rent</a></li>
                          <li className="list-inline-item"><a href="#">Featured</a></li>
                        </ul>
                        <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                        <h4 className="posr color-white">Renovated Apartment</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="feat_property home7">
                    <div className="thumb">
                      <img className="img-whp" src="images/property/fp3.jpg" alt="fp3.jpg" />
                      <div className="thmb_cntnt">
                        <ul className="tag mb0">
                          <li className="list-inline-item"><a href="#">For Rent</a></li>
                          <li className="list-inline-item"><a href="#">Featured</a></li>
                        </ul>
                        <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                        <h4 className="posr color-white">Renovated Apartment</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="feat_property home7">
                    <div className="thumb">
                      <img className="img-whp" src="images/property/fp4.jpg" alt="fp4.jpg" />
                      <div className="thmb_cntnt">
                        <ul className="tag mb0">
                          <li className="list-inline-item"><a href="#">For Rent</a></li>
                          <li className="list-inline-item"><a href="#">Featured</a></li>
                        </ul>
                        <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                        <h4 className="posr color-white">Renovated Apartment</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="feat_property home7">
                    <div className="thumb">
                      <img className="img-whp" src="images/property/fp5.jpg" alt="fp5.jpg" />
                      <div className="thmb_cntnt">
                        <ul className="tag mb0">
                          <li className="list-inline-item"><a href="#">For Rent</a></li>
                          <li className="list-inline-item"><a href="#">Featured</a></li>
                        </ul>
                        <a className="fp_price" href="#">$13,000<small>/mo</small></a>
                        <h4 className="posr color-white">Renovated Apartment</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="terms_condition_widget">
              <h4 className="title">Categories Property</h4>
              <div className="widget_list">
                <ul className="list_details">
                  <li><a href="#"><i className="fa fa-caret-right mr10" />Apartment <span className="float-right">6 properties</span></a></li>
                  <li><a href="#"><i className="fa fa-caret-right mr10" />Condo <span className="float-right">12 properties</span></a></li>
                  <li><a href="#"><i className="fa fa-caret-right mr10" />Family House <span className="float-right">8 properties</span></a></li>
                  <li><a href="#"><i className="fa fa-caret-right mr10" />Modern Villa <span className="float-right">26 properties</span></a></li>
                  <li><a href="#"><i className="fa fa-caret-right mr10" />Town House <span className="float-right">89 properties</span></a></li>
                </ul>
              </div>
            </div>
            <div className="sidebar_feature_listing">
              <h4 className="title">Recently Viewed</h4>
              <div className="media">
                <img className="align-self-start mr-3" src="images/blog/fls1.jpg" alt="fls1.jpg" />
                <div className="media-body">
                  <h5 className="mt-0 post_title">Nice Room With View</h5>
                  <a href="#">$13,000/<small>/mo</small></a>
                  <ul className="mb0">
                    <li className="list-inline-item">Beds: 4</li>
                    <li className="list-inline-item">Baths: 2</li>
                    <li className="list-inline-item">Sq Ft: 5280</li>
                  </ul>
                </div>
              </div>
              <div className="media">
                <img className="align-self-start mr-3" src="images/blog/fls2.jpg" alt="fls2.jpg" />
                <div className="media-body">
                  <h5 className="mt-0 post_title">Villa called Archangel</h5>
                  <a href="#">$13,000<small>/mo</small></a>
                  <ul className="mb0">
                    <li className="list-inline-item">Beds: 4</li>
                    <li className="list-inline-item">Baths: 2</li>
                    <li className="list-inline-item">Sq Ft: 5280</li>
                  </ul>
                </div>
              </div>
              <div className="media">
                <img className="align-self-start mr-3" src="images/blog/fls3.jpg" alt="fls3.jpg" />
                <div className="media-body">
                  <h5 className="mt-0 post_title">Sunset Studio</h5>
                  <a href="#">$13,000<small>/mo</small></a>
                  <ul className="mb0">
                    <li className="list-inline-item">Beds: 4</li>
                    <li className="list-inline-item">Baths: 2</li>
                    <li className="list-inline-item">Sq Ft: 5280</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-8">
          <div className="row">
            <div className="grid_list_search_result">
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-5">
                <div className="left_area tac-xsd">
                  <p>9 Search results</p>
                </div>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <List1 />
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
  <Footer />
</div>

    
    )}
export default List;