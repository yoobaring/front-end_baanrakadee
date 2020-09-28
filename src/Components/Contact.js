import React from 'react'
import Navbarpc from './Navbarpc';
import Navbarmobile from './Navbarmobile';
import Footer from './Footer';

const Contact =()=> {
    return (
     
<div>
<div className="wrapper">
  <div className="preloader" />
  <Navbarpc/>
  <Navbarmobile/>
  {/* Inner Page Breadcrumb */}
  <section className="inner_page_breadcrumb">
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <div className="breadcrumb_content">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">หน้าหลัก</a></li>
              <li className="breadcrumb-item active" aria-current="page">ติดต่อ</li>
            </ol>
            <h4 className="breadcrumb_title">ติดต่อเรา</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Contact */}
  <section className="our-contact pb0 bgc-f7">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-xl-8">
          <div className="form_grid">
            <h4 className="mb5">Send Us An Email</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida quis libero eleifend ornare. Maecenas mattis enim at arcu feugiat, sit amet blandit nisl iaculis. Donec lacus odio, malesuada eu libero sit amet, congue aliquam leo. In hac habitasse platea dictumst.</p>
            <form className="contact_form" id="contact_form" name="contact_form" action="#" method="post" noValidate="novalidate">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input id="form_name" name="form_name" className="form-control" required="required" type="text" placeholder="Name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input id="form_email" name="form_email" className="form-control required email" required="required" type="email" placeholder="Email" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input id="form_phone" name="form_phone" className="form-control required phone" required="required" type="phone" placeholder="Phone" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input id="form_subject" name="form_subject" className="form-control required" required="required" type="text" placeholder="Subject" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <textarea id="form_message" name="form_message" className="form-control required" rows={8} required="required" placeholder="Your Message" defaultValue={""} />
                  </div>
                  <div className="form-group mb0">
                    <button type="button" className="btn btn-lg btn-thm">Send Message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-5 col-xl-4">
          <div className="contact_localtion">
            <h4>Contact Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida quis libero eleifend ornare. habitasse platea dictumst.</p>
            <div className="content_list">
              <h5>Address</h5>
              <p>2301 Ravenswood Rd Madison, <br />WI 53711</p>
            </div>
            <div className="content_list">
              <h5>Phone</h5>
              <p>(315) 905-2321</p>
            </div>
            <div className="content_list">
              <h5>Mail</h5>
              <p><a href="https://grandetest.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="cda4a3aba28daba4a3a9a5a2b8bea8e3aea2a0">[email&nbsp;protected]</a></p>
            </div>
            <div className="content_list">
              <h5>Skype</h5>
              <p>findhouse.com</p>
            </div>
            <h5>Follow Us</h5>
            <ul className="contact_form_social_area">
              <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
              <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
              <li className="list-inline-item"><a href="#"><i className="fa fa-instagram" /></a></li>
              <li className="list-inline-item"><a href="#"><i className="fa fa-google" /></a></li>
              <li className="list-inline-item"><a href="#"><i className="fa fa-pinterest" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid p0 mt50">
      <div className="row">
        <div className="col-lg-12">
          <div className="h600" id="map-canvas" />
        </div>
      </div>
    </div>
  </section>
  {/* Start Partners */}
  <section className="start-partners bgc-thm pt50 pb50">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="start_partner tac-smd">
            <h2>เป็นตัวแทนขายอสังหาริมทรัพย์</h2>
            <p>เราทำงานร่วมกับ บริษัท ที่ดีที่สุดทั่วโลกเท่านั้น</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="parner_reg_btn text-right tac-smd">
            <a className="btn btn-thm2" href="/Login?">สมัครตอนนี้</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Footer */}
  <Footer/>
</div>
</div>
)
}
export default Contact;