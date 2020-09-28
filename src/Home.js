import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Footer from './Components/Footer';
import Navbarpc from './Components/Navbarpc';
import Navbarmobile from './Components/Navbarmobile';
// import logo from './logo.svg';

function Home() {

  const SearchAPI = 'https://ok-myhome.herokuapp.com/search/myhome'
  const [search, setSearch] = useState({});
  const [result, setResult] = useState([]);
  console.log(search)

  const addSearch = async () => {
      const res = await axios.post(SearchAPI, search)
      console.log("res", res.data)
      setResult(res.data);
  }




  return (
    <div className="wrapper">
  <div className="preloader" />
  <div>
  <Navbarpc/>
  <Navbarmobile/>
  </div>
  {/* 6th Home Design */}
  <section className="home-six home6-overlay">
    <div className="container">
      <div className="row posr">
        <div className="col-lg-12">
          <div className="home_content home6">
            <div className="home-text home6 text-center">
              <h2 className="fz55">บ้านราคาดี</h2>
              <p className="fz18">เพลิดเพลินไปกับบ้านที่ดีที่สุด</p>
            </div>
            <div className="home_adv_srch_opt home6">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">ซื้อ</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">ขาย</a>
                </li>
              </ul>
              <div className="tab-content home1_adsrchfrm" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div className="home1-advnc-search home6">
                    <ul className="h1ads_1st_list mb0">
                      <li className="list-inline-item">
                        <div className="form-group">
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="search_option_two">
                          <div className="candidate_revew_select">
                            <select className="selectpicker w100 show-tick" 
                             onChange={(e) => setSearch({ ...search, category: e.target.value })}
                             placeholder='ประเภท'>
                            <option>ประเภท</option>
                              <option>house</option>
                              <option>คอนโด</option>
                              <option>ทาวน์เฮาส์</option>
                              <option>ตึกพาณิชย์</option>
                            </select>
                          </div>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="form-group">
                          <input type="text" className="form-control"                 
                          onChange={(e) => setSearch({ ...search, province: e.target.value })}
                          placeholder='จังหวัด'/>
                          <label htmlFor="exampleInputEmail"><span className="flaticon-maps-and-flags" /></label>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="small_dropdown2 home6">
                          <div id="prncgs" className="btn dd_btn">
                            <span>ราคา</span>
                            <label htmlFor="exampleInputEmail2"><span className="fa fa-angle-down" /></label>
                          </div>
                          <div className="dd_content2">
                            <div >
                              <input type="text" className="amount"                             
                               onChange={(e) => setSearch({ ...search, fPrice: e.target.value })}
                               placeholder='ราคาต่ำ'/> 
                              <input type="text" className="amount2" 
                               onChange={(e) => setSearch({ ...search, ePrice: e.target.value })}
                               placeholder='ราคาสูง'/>
                              <div  />
                            </div>
                          </div>
                        </div>
                      </li>
                     
                      <li className="list-inline-item">
                        <div className="search_option_button">
                          <button type="button" className="btn btn-thm" href='/Usersearchlist' onClick={addSearch} >ค้นหา</button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  {/* Whatare you looking for */}
  <section className="you-looking-for">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="main-title text-center mb30">
            <h2>คุณกำลังมองหาอะไร?</h2>
            <p>เราให้บริการเต็มรูปแบบในทุกขั้นตอน</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Property Cities */}
  <section id="property-city" className="property-city pb30">
    <div className="container">
      <div className="row features_row">
        <div className="col-sm-6 col-lg-3 col-xl-3 p0">
          <div className="why_chose_us home6">
            <div className="icon">
              <span className="flaticon-house-1" />
            </div>
            <div className="details">
              <h4>คอนโดทันสมัย</h4>
              <p>สภาพแวดล้อมการใช้ชีวิตของนักพัฒนาล่าสุดนั้นเป็นเรื่องง่าย แต่ก็เป็นเรื่องง่าย.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 col-xl-3 p0">
          <div className="why_chose_us home6">
            <div className="icon">
              <span className="flaticon-house" />
            </div>
            <div className="details">
              <h4>บ้านพักสำหรับครอบครัว</h4>
              <p>สภาพแวดล้อมการใช้ชีวิตของนักพัฒนาล่าสุดนั้นเป็นเรื่องง่าย แต่ก็เป็นเรื่องง่าย.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 col-xl-3 p0">
          <div className="why_chose_us home6">
            <div className="icon">
              <span className="flaticon-house-2" />
            </div>
            <div className="details">
              <h4>ทาวน์เฮาส์</h4>
              <p>สภาพแวดล้อมการใช้ชีวิตของนักพัฒนาล่าสุดนั้นเป็นเรื่องง่าย แต่ก็เป็นเรื่องง่าย.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 col-xl-3 p0">
          <div className="why_chose_us home6 bdrrn">
            <div className="icon">
              <span className="flaticon-building" />
            </div>
            <div className="details">
              <h4>ตึกพาณิชย์</h4>
              <p>สภาพแวดล้อมการใช้ชีวิตของนักพัฒนาล่าสุดนั้นเป็นเรื่องง่าย แต่ก็เป็นเรื่องง่าย.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="main-title text-center">
            <h2>ค้นหาอสังหาริมทรัพย์ในเมืองเหล่านี้</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="property_city_home6">
            <div className="thumb"><img className="w100" src="images/property/pc18.jpg" alt="pc18.jpg" /></div>
            <div className="details">
              <h4>Miami</h4>
              <p>24 Properties</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="property_city_home6">
            <div className="thumb"><img className="w100" src="images/property/pc19.jpg" alt="pc19.jpg" /></div>
            <div className="details">
              <h4>Los Angeles</h4>
              <p>18 Properties</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="property_city_home6">
            <div className="thumb"><img className="w100" src="images/property/pc20.jpg" alt="pc20.jpg" /></div>
            <div className="details">
              <h4>New York</h4>
              <p>89 Properties</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="property_city_home6">
            <div className="thumb"><img className="w100" src="images/property/pc21.jpg" alt="pc21.jpg" /></div>
            <div className="details">
              <h4>Florida</h4>
              <p>47 Properties</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="property_city_home6">
            <div className="thumb"><img className="w100" src="images/property/pc22.jpg" alt="pc22.jpg" /></div>
            <div className="details">
              <h4>Orlando</h4>
              <p>18 Properties</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="property_city_home6">
            <div className="thumb"><img className="w100" src="images/property/pc23.jpg" alt="pc23.jpg" /></div>
            <div className="details">
              <h4>Atlanta</h4>
              <p>89 Properties</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Modern Apertment */}
  <section className="modern-apertment pt100 pb90">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="modern_apertment mt30">
            <h2 className="title">อพาร์ตเมนต์ทันสมัย</h2>
            <h4 className="subtitle">$ 79 ในเวลากลางคืน</h4>
            <p>ฉันเป็นบล็อกข้อความ คลิกปุ่มแก้ไขเพื่อเปลี่ยนข้อความนี้ Lorem ipsum dolor sit amet, consipetur adipiscing elit.</p>
            <a className="btn booking_btn btn-thm" href="#">จองตอนนี้</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  {/* Our Blog */}
  <section className="our-blog bb1 pb30">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="main-title text-center">
            <h2>บทความ &amp; เคล็ดลับ</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 col-xl-4">
          <div className="for_blog feat_property">
            <div className="thumb">
              <img className="img-whp" src="images/blog/bh1.jpg" alt="bh1.jpg" />
            </div>
            <div className="details">
              <div className="tc_content">
                <p className="text-thm">ธุรกิจ</p>
                <h4>Skills That You Can Learn In The Real Estate Market</h4>
              </div>
              <div className="fp_footer">
                <ul className="fp_meta float-left mb0">
                  <li className="list-inline-item"><a href="#"><img src="images/property/pposter1.png" alt="pposter1.png" /></a></li>
                  <li className="list-inline-item"><a href="#">Ali Tufan</a></li>
                </ul>
                <a className="fp_pdate float-right" href="#">7 August 2019</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-4">
          <div className="for_blog feat_property">
            <div className="thumb">
              <img className="img-whp" src="images/blog/bh2.jpg" alt="bh2.jpg" />
            </div>
            <div className="details">
              <div className="tc_content">
                <p className="text-thm">Business</p>
                <h4>สีห้องนอนที่คุณจะไม่มีวัน <br className="dn-1199" /> เสียใจด้วย</h4>
              </div>
              <div className="fp_footer">
                <ul className="fp_meta float-left mb0">
                  <li className="list-inline-item"><a href="#"><img src="images/property/pposter1.png" alt="pposter1.png" /></a></li>
                  <li className="list-inline-item"><a href="#">Ali Tufan</a></li>
                </ul>
                <a className="fp_pdate float-right" href="#">7 August 2019</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-4">
          <div className="for_blog feat_property">
            <div className="thumb">
              <img className="img-whp" src="images/blog/bh3.jpg" alt="bh3.jpg" />
            </div>
            <div className="details">
              <div className="tc_content">
                <p className="text-thm">ธุรกิจ</p>
                <h4>5 ขั้นตอนที่จำเป็นสำหรับการซื้อการลงทุน</h4>
              </div>
              <div className="fp_footer">
                <ul className="fp_meta float-left mb0">
                  <li className="list-inline-item"><a href="#"><img src="images/property/pposter1.png" alt="pposter1.png" /></a></li>
                  <li className="list-inline-item"><a href="#">Ali Tufan</a></li>
                </ul>
                <a className="fp_pdate float-right" href="#">7 August 2019</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Partners */}
  <section id="our-partners" className="our-partners">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="main-title text-center">
            <h2>พันธมิตรของเรา</h2>
            <p>เราทำงานร่วมกับ บริษัท ที่ดีที่สุดทั่วโลกเท่านั้น</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg">
          <div className="our_partner">
            <img className="img-fluid" src="images/partners/1.png" alt="1.png" />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg">
          <div className="our_partner">
            <img className="img-fluid" src="images/partners/2.png" alt="2.png" />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg">
          <div className="our_partner">
            <img className="img-fluid" src="images/partners/3.png" alt="3.png" />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg">
          <div className="our_partner">
            <img className="img-fluid" src="images/partners/4.png" alt="4.png" />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg">
          <div className="our_partner">
            <img className="img-fluid" src="images/partners/5.png" alt="5.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</div>


  );
}

export default Home;
