import React from 'react'

const Usernavbarmobile =()=> {
    return (
     
<div>
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
  <li><a href="/">หน้าหลัก</a></li>
  <li><a href="/Userdashboard">Dashboard</a></li>
  <li><a href="/Showlist">แก้ไขรายการ</a></li>

  
    <li><a href="/Profile">ข้อมูลผู้ใช้</a></li>
    <li><a href="/"><span className="flaticon-user" /> Login</a></li>
    <li><a href="#"><span className="flaticon-edit" /> Register</a></li>
    <li><a href="#"><span className="flaticon-edit" /> Login</a></li>
    <li className="cl_btn"><a className="btn btn-block btn-lg btn-thm circle" href="#"><span className="flaticon-plus" /> Create Listing</a></li>
  </ul>
</nav>



</div>
<div className="dashboard_sidebar_menu dn-992">
 <ul className="sidebar-menu">
   <li className="header"><img src="images/header-logo2.png" alt="header-logo2.png" />&nbsp;&nbsp;&nbsp;จัดการ</li>
   <li className="title"><span>เว็บไซต์</span></li>
   <li className="treeview"><a href="/"><i className="flaticon-layers" /><span> หน้าหลัก</span></a></li>
   <li className="title"><span>Main</span></li>
   <li className="treeview"><a href="/Userdashboard"><i className="flaticon-layers" /><span> Dashboard</span></a></li>

   <li className="title"><span>จัดการรายการบ้าน</span></li>
   <li><a href="/Showlist"><i className="flaticon-heart" /> <span> แก้ไขรายการ</span></a></li>

   <li className="title"><span>Manage Account</span></li>
   <li><a href="/Profile"><i className="flaticon-user" /> <span>ข้อมูลผู้ใช้</span></a></li>
   <li><a href="/"><i className="flaticon-logout" /> <span>Logout</span></a></li>
 </ul>
 </div>
 </div>
    )
}
export default Usernavbarmobile;