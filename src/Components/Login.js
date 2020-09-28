
import React from 'react';
import Footer from './Footer';
// import List1 from './List1';
import Navbarpc from './Navbarpc';
import Navbarmobile from './Navbarmobile';


const Login =()=> {

   
    return (
        <div className="wrapper">
  <div className="preloader" />
  <Navbarpc />
  <Navbarmobile />


  
  {/* Inner Page Breadcrumb */}
  <section className="inner_page_breadcrumb">
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <div className="breadcrumb_content">
            <h4 className="breadcrumb_title">Logın</h4>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Logın</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our LogIn Register */}
  <section className="our-log bgc-fa">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          <div className="login_form inner_page">
            <form action="#">
              <div className="heading">
                <h3 className="text-center">ลงชื่อเข้าใช้บัญชีของคุณ</h3>


              </div>
           
     
              <p className="text-center">Sign in ADN Sign up <a className="text-thm"></a></p>

            
          <div className="parner_reg_btn text-center tac-smd">
   
              
            <li className="list-inline-item list_s"><a href="#" className="btn flaticon-user" data-toggle="modal" data-target=".bd-example-modal-lg"> <span className="dn-lg">ล๊อกอิน/สมัครสมาชิก ตอนนี้!!!!</span></a></li>
    
        </div>
              
            </form>
          </div>
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
            <a className="btn btn-thm2" href="#">Register Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Footer */}
  <Footer />
  </div>
    )}


 export default Login;
 