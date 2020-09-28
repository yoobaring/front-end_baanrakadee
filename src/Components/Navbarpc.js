import React, { useState } from "react";
import axios from "axios";

const authAPI = 'https://ok-myhome.herokuapp.com/user/login'
const userAPI = 'https://ok-myhome.herokuapp.com/user/register'

const Navbarpc = props => {

  const [datauser, setUser] = useState({});  //จากinput
  console.log(datauser);
  const [data , setData] = useState({})

const login = async () => {


  let res = await axios.post(authAPI, datauser);

  console.log("res",res.data.success);
  if (res.data.success){
       alert("Login Success");
       props.history.push("/");
  }
  else{      
    alert("username หรือ password คุณป้อนไม่ถูกต้อง");
  }


};

const createuser = async () => {

  console.log(data);
  
  let res = await axios.post(userAPI, data);
  console.log("res",res.data.message);
  
  if (res.data.message === 'Username already exists'){
    alert("มีชื่อผู้ใช้อยู่แล้ว");
  }
  if(res.data.message === '\"name\" length must be at least 6 characters long'){
    alert("ชื่อต้องมีความยาวมากกว่า 6 ตัวอักษร");
  }
  if(res.data.message === '\"password\" length must be at least 6 characters long'){
    alert("รหัสผ่านต้องมีความยาวมากกว่า 6 ตัว");
  }    
  else{     
    alert("Create Success");
    props.history.push("/List");
  }

};
  console.log(data);


    return (
     
<div>
{/* Main Header Nav */}
<header className="header-nav menu_style_home_one style2 style3 navbar-scrolltofixed stricky main-menu">
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
    <a href="/" className="navbar_brand float-left dn-smd">
      <img className="logo1 img-fluid" src="images/header-logo2.png" alt="header-logo.png" />
      <img className="logo2 img-fluid" src="images/header-logo2.png" alt="header-logo2.png" />
      <span>บ้านราคาดี</span>
    </a>
    {/* Responsive Menu Structure*/}
    {/*Note: declare the Menu style in the data-menu-style="horizontal" (options: horizontal, vertical, accordion) */}
    <div className="ht_left_widget float-left">
      <ul>
        <li className="list-inline-item dn-1440">
          <div className="ht_search_widget">
            <div className="header_search_widget">
              <form className="form-inline mailchimp_form">
                <input type="text" className="form-control" id="inlineFormInputName2" placeholder="คุณกำลังมองหาอะไร?" />
                <button type="submit" className="btn btn-primary"><span className="flaticon-magnifying-glass" /></button>
              </form>
            </div>
          </div>
        </li>
        <li className="list-inline-item list_s dib-1440 dn">
          <div className="search_overlay">
            <a id="search-button-listener" className="mk-search-trigger mk-fullscreen-trigger" href="#">
              <span id="search-button"><i className="flaticon-magnifying-glass" /></span>
            </a>
          </div>
        </li>
      </ul>
    </div>
    <ul id="respMenu" className="ace-responsive-menu text-right" data-menu-style="horizontal">
      <li>
        <a href="/"><span className="title">หน้าหลัก</span></a>
      </li>
      <li>
        <a href="#"><span className="title">ประกาศขาย</span></a>
        <ul>
          <li>
            <a href="/List">บ้าน</a>
          </li>
          <li>
            <a href="/List">คอนโด </a>
          </li>
          <li>
            <a href="/List">ทาวน์เฮ้าส์</a>
          </li>
          <li><a href="./Usercreatelist">ตึกพาณิชย์</a></li>
        </ul>
      </li>
      <li>
        <a href="#"><span className="title">ประกาศเช่า</span></a>
        <ul>
          <li>
            <a href="#"><span className="title">บ้าน</span></a>
          </li>
          <li><a href="/List">คอนโด</a></li>
          <li><a href="/List">ทาวน์เฮ้าส์</a></li>
          <li><a href="/List">ตึกพาณิชย์</a></li>
        </ul>
      </li>
      <li className="last">
        <a href="/Contact"><span className="title">ติดต่อเรา</span></a>
      </li>
      <li className="list-inline-item list_s"><a href="/Login?" className="btn flaticon-user" > <span className="dn-lg">ล๊อกอิน/สมัครสมาชิก</span></a></li>
      <li className="list-inline-item add_listing home6"><a href="/Usercreatelist"><span className="flaticon-plus" /><span className="dn-lg"> ลงประกาศ</span></a></li>

      <a href="https://lin.ee/lQbZ3u6"><img src="https://databet95.com/wp-content/uploads/2019/11/line-add-friend.png" alt="เพิ่มเพื่อน" height={50} border={0} /></a>

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
              <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">ล๊อกอิน</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">สมัครสมาชิก</a>
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
                  <h4>ล๊อกอิน</h4>
                </div>
  
                
                <div className="input-group mb-2 mr-sm-2">
                  <input type="text" className="form-control" onChange={(e) => setUser({...datauser,username: e.target.value})} placeholder="ระบุชื่อผู้ใช้หรืออีเมล" />
                  <div className="input-group-prepend">
                    <div className="input-group-text"><i className="flaticon-user" /></div>
                  </div>
                </div>
                <div className="input-group form-group">
                  <input type="password" className="form-control" onChange={(e) => setUser({...datauser,password: e.target.value})} placeholder="ระบุรหัสผ่าน" />
                  <div className="input-group-prepend">
                    <div className="input-group-text"><i className="flaticon-password" /></div>
                  </div>
                </div>
                <div className="form-group custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="exampleCheck1" />
                  <label className="custom-control-label" htmlFor="exampleCheck1">จดจำ</label>
                  <a className="btn-fpswd float-right" href="#">ลืมรหัสผ่าน?</a>
                </div>
                <button type="submit" className="btn btn-log btn-block btn-thm" onClick={login}>ล๊อกอิน</button>
               
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

              {/* <form action="/" id="signup-form">
            <input type="name"  placeholder="ชื่อ สกุล" onChange={(e)=> { setData({...data, name : e.target.value})}}/>
            <br/><input type="username"  placeholder="ชื่อผู้ใช้" onChange={(e)=> { setData({...data, username : e.target.value})}}/>
            <br/><input type="email"  placeholder="อีเมล์" onChange={(e)=> { setData({...data, email : e.target.value})}}/>
            <br/><input type="password"  placeholder="รหัสผ่าน" onChange={(e)=> { setData({...data, password : e.target.value})}}/>
            <br/><input type="password"  placeholder="ยืนยันรหัสผ่าน" onChange={(e)=> { setData({...data, password : e.target.value})}}/>
            <br/><button type="submit"   onClick = {createuser}>ลงชื่อ</button>
          </form> */}


                <h4>สมัครสมาชิก</h4>
              </div>
              <form action="/">
              <div className="form-group input-group">
                  <input type="text" className="form-control" onChange={(e)=> { setData({...data, name : e.target.value})}} placeholder="ชื่อ สกุล" />
                  <div className="input-group-prepend">
                    <div className="input-group-text"><i className="flaticon-user" /></div>
                  </div>
                </div>
                <div className="form-group input-group">
                  <input type="text" className="form-control" onChange={(e)=> { setData({...data, username : e.target.value})}} placeholder="ชื่อผู้ใช้" />
                  <div className="input-group-prepend">
                    <div className="input-group-text"><i className="flaticon-user" /></div>
                  </div>
                </div>
                <div className="form-group input-group">
                  <input type="email" className="form-control" onChange={(e)=> { setData({...data, email : e.target.value})}} placeholder="อีเมล์" />
                  <div className="input-group-prepend">
                    <div className="input-group-email"><i className="fa fa-envelope-o" /></div>
                  </div>
                </div>
                <div className="form-group input-group">
                  <input type="password" className="form-control" onChange={(e)=> { setData({...data, password : e.target.value})}} placeholder="รหัสผ่าน" />
                  <div className="input-group-prepend">
                    <div className="input-group-text"><i className="flaticon-password" /></div>
                  </div>
                </div>
                <div className="form-group input-group">
                  <input type="password" className="form-control" onChange={(e)=> { setData({...data, password : e.target.value})}} placeholder="ยืนยันรหัสผ่านอีกครั้ง" />
                  <div className="input-group-prepend">
                    <div className="input-group-text"><i className="flaticon-password" /></div>
                  </div>
                </div>
                {/* <div className="form-group ui_kit_select_search mb0">
                  <select className="selectpicker" data-live-search="true" data-width="100%">
                    <option data-tokens="SelectRole">Single User</option>
                    <option data-tokens="Agent/Agency">Agent</option>
                    <option data-tokens="SingleUser">Multi User</option>
                  </select>
                </div> */}
                <div className="form-group custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="exampleCheck2" />
                  <label className="custom-control-label" htmlFor="exampleCheck2">ฉันได้อ่านและยอมรับข้อกำหนดและนโยบายความเป็นส่วนตัวแล้ว</label>
                </div>
                <button type="submit" className="btn btn-log btn-block btn-thm" onClick = {createuser}>สมัครสมาชิก</button>
     
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
{/* Modal Search Button Bacground Overlay */}
<div className="search_overlay dn-992">
<div className="mk-fullscreen-search-overlay" id="mk-search-overlay">
  <button className="mk-fullscreen-close" id="mk-fullscreen-close-button"><i className="fa fa-times" /></button>
  <div id="mk-fullscreen-search-wrapper">
    <form method="get" id="mk-fullscreen-searchform">
      <input type="text" defaultValue placeholder="ค้นหา..." id="mk-fullscreen-search-input" />
      <i className="flaticon-magnifying-glass fullscreen-search-icon"><input defaultValue type="submit" /></i>
    </form>
  </div>
</div>
</div>

</div>
    )
}
export default Navbarpc;