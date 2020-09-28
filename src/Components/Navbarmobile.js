import React from 'react'

const Navbarmobile =()=> {
    return (
     
<div>
{/* Main Header Nav For Mobile */}
<div id="page" className="stylehome1 h0">
<div className="mobile-menu">
  <div className="header stylehome1">
    <div className="main_logo_home2 text-center">
      <img className="nav_logo_img img-fluid mt20" src="images/header-logo2.png" alt="header-logo2.png" />
      <span className="mt20">บ้านราคาดี <a href="/"></a></span>
    </div>
    <ul className="menu_bar_home2">
      <li className="list-inline-item list_s"><a href="page-register.html"><span className="flaticon-user" /></a></li>
      <li className="list-inline-item">
        <div className="search_overlay">
          <div id="search-button-listener2" className="mk-search-trigger style2 mk-fullscreen-trigger">
            <div id="search-button2"><i className="flaticon-magnifying-glass" /></div>
          </div>
          <div className="mk-fullscreen-search-overlay" id="mk-search-overlay2">
            <button className="mk-fullscreen-close" id="mk-fullscreen-close-button2"><i className="fa fa-times" /></button>
            <div id="mk-fullscreen-search-wrapper2">
              <form method="get" id="mk-fullscreen-searchform2">
                <input type="text" defaultValue placeholder="Search courses..." id="mk-fullscreen-search-input2" />
                <i className="flaticon-magnifying-glass fullscreen-search-icon"><input defaultValue type="submit" /></i>
              </form>
            </div>
          </div>
        </div>
      </li>
      <li className="list-inline-item"><a href="#menu"><span /></a></li>
    </ul>
  </div>
</div>{/* /.mobile-menu */}
<nav id="menu" className="stylehome1">
  <ul>
  <li><a href="/"> หน้าหลัก</a></li>
				<li><span>ประกาศขาย</span>
					<ul>
				
            <li><a href="/List"><span className="flaticon-user" /> บ้าน</a></li>
					
            <li><a href="/List"><span className="flaticon-user" /> คอนโด</a></li>

						<li><a href="/List"><span className="flaticon-user" /> ทาวน์เฮ้าส์</a></li>
					  
            <li><a href="/List"><span className="flaticon-user" /> ตึกพาณิชย์</a></li>

		
					</ul>
				</li>

        <li><span>ประกาศเช่า</span>
					<ul>
				
            <li><a href="/List"><span className="flaticon-user" /> บ้าน</a></li>
					
            <li><a href="/List"><span className="flaticon-user" /> คอนโด</a></li>

						<li><a href="/List"><span className="flaticon-user" /> ทาวน์เฮ้าส์</a></li>
					  
            <li><a href="/List"><span className="flaticon-user" /> ตึกพาณิชย์</a></li>

			
					</ul>
				</li>
        <li><a href="/contact"> ติดต่อเรา</a></li>
        <li><a href="/Usercreatelist"> ลงประกาศ</a></li>

       
        <li className="list-inline-item list_s"><a href="/Login?"><img src="https://secure.acsevents.org/images/content/pagebuilder/180553.png" alt="เพิ่มเพื่อน" height={60} border={0} /></a></li>

      
        <li className="list-inline-item list_s"><a href="https://lin.ee/lQbZ3u6"><img src="https://databet95.com/wp-content/uploads/2019/11/line-add-friend.png" alt="เพิ่มเพื่อน" height={40} border={0} /></a></li>


  </ul>
</nav>
</div>
</div>
    )
}
export default Navbarmobile;