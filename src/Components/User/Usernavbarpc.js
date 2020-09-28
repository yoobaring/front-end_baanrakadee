import React from 'react'

const Usernavbarpc =()=> {
    return (
     
<div>
{/* Main Header Nav */}
<header className="header-nav menu_style_home_one style2 menu-fixed main-menu">
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
      <span>จัดการ</span>
    </a>
    {/* Responsive Menu Structure*/}
    {/*Note: declare the Menu style in the data-menu-style="horizontal" (options: horizontal, vertical, accordion) */}
    <ul id="respMenu" className="ace-responsive-menu text-right" data-menu-style="horizontal">
      
      <li className="user_setting">
        <div className="dropdown">
          <a className="btn dropdown-toggle" href="#" data-toggle="dropdown"><img className="rounded-circle" src="images/team/e1.png" alt="e1.png" /> <span className="dn-1199">Ali Tufan</span></a>
          <div className="dropdown-menu">
            <div className="user_set_header">
              <img className="float-left" src="images/team/e1.png" alt="e1.png" />
              <p>Ali Tufan <br /><span className="address"><a href="https://grandetest.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="0b6a67627f7e6d6a654b6c666a626725686466">[email&nbsp;protected]</a></span></p>
            </div>
            <div className="user_setting_content">
              <a className="dropdown-item active" href="./Profile">ข้อมูลผู้ใช้</a>
              <a className="dropdown-item" href="/">Log out</a>
            </div>
          </div>
        </div>
      </li>
  
    </ul>
  </nav>
</div>
</header>
 </div>
 )
}
export default Usernavbarpc;