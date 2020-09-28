import React from 'react'
import Usernavbarpc from './Usernavbarpc'
import Usernavbarmobile from './Usernavbarmobile'
import Userfooter from './Userfooter'
import Listmenu from './Listmenu'

const Searchlist =()=> {
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
        <div className="col-sm-12 col-lg-8 col-xl-10 maxw100flex-992">
          <div className="row">
            <div className="col-lg-4 col-xl-4 mb10">
              <div className="breadcrumb_content style2 mb30-991">
                <h2 className="breadcrumb_title">My Properties</h2>
                <p>We are glad to see you again!</p>
              </div>
            </div>
            <div className="col-lg-8 col-xl-8">
              <div className="candidate_revew_select style2 text-right mb30-991">
                <ul className="mb0">
                  <li className="list-inline-item">
                    <div className="candidate_revew_search_box course fn-520">
                      <form className="form-inline my-2">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search Courses" aria-label="Search" />
                        <button className="btn my-2 my-sm-0" type="submit"><span className="flaticon-magnifying-glass" /></button>
                      </form>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <select className="selectpicker show-tick">
                      <option>Featured First</option>
                      <option>Recent</option>
                      <option>Old Review</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="my_dashboard_review mb40">
                <div className="property_table">
                  <div className="table-responsive mt0">
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Listing Title</th>
                          <th scope="col">Date published</th>
                          <th scope="col">Status</th>
                          <th scope="col">View</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      </tbody>
                      </table>
                  </div>
                  
                  <Listmenu />
                        
                        
                      
                    
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
          <Userfooter />
        </div>
      </div>
    </div>
  </section>
</div>

</div>
)
}
export default Searchlist;
