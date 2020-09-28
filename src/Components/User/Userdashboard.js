import React from 'react'
import Usernavbarpc from './Usernavbarpc'
import Usernavbarmobile from './Usernavbarmobile'
import Userfooter from './Userfooter'
const Userdashboard =()=> {
    return (
     
<div>
<div className="wrapper">
  <div className="preloader" />
  <Usernavbarpc />
  <Usernavbarmobile />

  {/* Our Dashbord */}
  <section className="our-dashbord dashbord bgc-f7 pb50">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-xl-2 dn-992 pl0" />
        <div className="col-lg-9 col-xl-10 maxw100flex-992">
          <div className="row">
          
            <div className="col-lg-12 mb10">
              <div className="breadcrumb_content style2">
                <h2 className="breadcrumb_title">Howdy, Ali!</h2>
                <p>We are glad to see you again!</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
              <div className="ff_one">
                <div className="icon"><span className="flaticon-home" /></div>
                <div className="detais">
                  <div className="timer">37</div>
                  <p>All Properties</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
              <div className="ff_one style2">
                <div className="icon"><span className="flaticon-view" /></div>
                <div className="detais">
                  <div className="timer">24</div>
                  <p>Total Views</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
              <div className="ff_one style3">
                <div className="icon"><span className="flaticon-chat" /></div>
                <div className="detais">
                  <div className="timer">12</div>
                  <p>Total Visitor Reviews</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
              <div className="ff_one style4">
                <div className="icon"><span className="flaticon-heart" /></div>
                <div className="detais">
                  <div className="timer">18</div>
                  <p>Total Favorites</p>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="application_statics">
                <h4>View Statistics</h4>
                <div className="c_container" />
              </div>
            </div>
            <div className="col-xl-5">
              <div className="recent_job_activity">
                <h4 className="title">Recent Activities</h4>
                <div className="grid">
                  <ul>
                    <li className="list-inline-item"><div className="icon"><span className="flaticon-home" /></div></li>
                    <li className="list-inline-item"><p>Your listing <strong>Luxury Family Home</strong> has been approved!.</p></li>
                  </ul>
                </div>
                <div className="grid">
                  <ul>
                    <li className="list-inline-item"><div className="icon"><span className="flaticon-chat" /></div></li>
                    <li className="list-inline-item"><p>Kathy Brown left a review  on <strong>Renovated Apartment</strong></p></li>
                  </ul>
                </div>
                <div className="grid">
                  <ul>
                    <li className="list-inline-item"><div className="icon"><span className="flaticon-heart" /></div></li>
                    <li className="list-inline-item"><p>Someone favorites your <strong>Gorgeous Villa Bay View</strong> listing!</p></li>
                  </ul>
                </div>
                <div className="grid">
                  <ul>
                    <li className="list-inline-item"><div className="icon"><span className="flaticon-home" /></div></li>
                    <li className="list-inline-item"><p>Your listing <strong>Luxury Family Home</strong> has been approved!</p></li>
                  </ul>
                </div>
                <div className="grid">
                  <ul>
                    <li className="list-inline-item"><div className="icon"><span className="flaticon-chat" /></div></li>
                    <li className="list-inline-item"><p>Kathy Brown left a review on <strong>Renovated Apartment</strong></p></li>
                  </ul>
                </div>
                <div className="grid mb0">
                  <ul className="pb0 mb0 bb_none">
                    <li className="list-inline-item"><div className="icon"><span className="flaticon-heart" /></div></li>
                    <li className="list-inline-item"><p>Someone favorites your <strong>Gorgeous Villa Bay</strong> View listing!</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Userfooter />
        </div>
      </div>
    </div>
  </section>
</div>
</div>
)
}
export default Userdashboard;