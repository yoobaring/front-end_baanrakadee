import React from 'react'
import Navbarpc from './Navbarpc';
import Navbarmobile from './Navbarmobile';
import Footer from './Footer';

const Errorpage =()=> {
    return (
     
<div>
<div className="wrapper">
  <div className="preloader" />
  <Navbarpc/>
  <Navbarmobile/>
</div>
  {/* Our Error Page */}
  <section className="our-error bgc-f7">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1 text-center">
          <div className="error_page footer_apps_widget">
            <img className="img-fluid" src="images/resource/error.png" alt="error.png" />
            <div className="erro_code"><h1>Ohh! ไม่พบหน้านี้</h1></div>
            <p>ดูเหมือนว่าเราจะไม่พบหน้าเว็บที่คุณต้องการ</p>

          </div>
          <a className="btn btn_error btn-thm" href="\">ย้อนกลับหน้าหลัก</a>
        </div>
      </div>
    </div>
  </section>
  {/* Our Footer */}
<Footer/>
</div>
)
}
export default Errorpage;
