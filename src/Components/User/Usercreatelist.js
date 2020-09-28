
import Usernavbarpc from './Usernavbarpc'
import Usernavbarmobile from './Usernavbarmobile'
import Userfooter from './Userfooter'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from './Image'

const Usercreatelist =()=> {

  let url = 'https://ok-myhome.herokuapp.com/api/home'   
  const [myhome, setMyhome] = useState([])
  const [name, setName] = useState('')
  const [des, setDes] = useState('')
  const [latitude, setLatitide] = useState('')
  const [longitude, setLongitude] = useState('')
  const [tel, setTel] = useState('')
  const [price, setPrice] = useState('')
  const [area, setArea] = useState('')
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')
  const [province, setProvince] = useState('')

  useEffect(()=>{
      getMyhome()
  },[])

  const getMyhome = async () => {
      const result = await axios.get(url)
      setMyhome(result.data)
      console.log(result.data)
  }

  const addMyhome = async () => {
      const result = await axios.post(url,{
          name,des,latitude,longitude,tel,price,area,type,category,province
      }) 
      getMyhome()
    
  }

    return (
     
<div>
<div className="wrapper">
  <div className="preloader" />
  <Usernavbarpc />
  <Usernavbarmobile />
 
  {/* Our Dashbord */}
  <section className="our-dashbord dashbord bgc-f7 pb50">
    <div className="container-fluid ovh">
      <div className="row">
        <div className="col-lg-3 col-xl-2 dn-992 pl0" />
        <div className="col-lg-9 col-xl-10 maxw100flex-992">
          <div className="row">
  
            <div className="col-lg-12 mb10">
              <div className="breadcrumb_content style2">
                <h2 className="breadcrumb_title">&nbsp;&nbsp;&nbsp;เพิ่มข้อมูลประกาศ</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="my_dashboard_review">
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className="mb30">สร้างข้อมูล</h4>
                    <div className="my_profile_setting_input form-group">
                      <label htmlFor="propertyTitle">ชื่อโครงการ</label>
                      <input type="text" className="form-control" onChange={(e)=> setName(e.target.value)}
                    
                     value={name}
                     placeholder='Enter name' />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="my_profile_setting_textarea">
                      <label htmlFor="propertyDescription">อธิบายรายละเอียด</label>
                      <textarea className="form-control" rows={7} defaultValue={""} onChange={(e)=> setDes(e.target.value)}
                      type='text'
                      value={des}
                      placeholder='Enter description'/>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-6">
                    <div className="my_profile_setting_input ui_kit_select_search form-group">
                      <label>เลือกประกาศ</label>
                      <select className="selectpicker" data-live-search="true" data-width="100%" onChange={(e)=> setType(e.target.value)} type='text' value={type}>
                        <option data-tokens="type1">ขาย</option>
                        <option data-tokens="Type2">เช่า</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-6">
                    <div className="my_profile_setting_input ui_kit_select_search form-group">
                      <label>เลือกประเภท</label>
                      <select className="selectpicker" data-live-search="true" data-width="100%" onChange={(e)=> setCategory(e.target.value)}  type='text' value={category}>
                        <option data-tokens="Status1">บ้าน</option>
                        <option data-tokens="Status2">คอนโด</option>
                        <option data-tokens="Status3">ทาวน์เฮาส์</option>
                        <option data-tokens="Status4">ตึกพาณิชย์</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-4">
                    <div className="my_profile_setting_input form-group">
                      <label htmlFor="formGroupExamplePrice">ราคา</label>
                      <input type="text" className="form-control" onChange={(e)=> setPrice(e.target.value)}
                     
                      value={price}
                      placeholder='Enter price'
                       />
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-4">
                    <div className="my_profile_setting_input form-group">
                      <label htmlFor="formGroupExampleArea">พื้นที่</label>
                      <input type="text" className="form-control" onChange={(e)=> setArea(e.target.value)}
                    
                      value={area}
                      placeholder='Enter area'
                       />
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-4">
                    <div className="my_profile_setting_input form-group">
                      <label htmlFor="formGroupExampleArea">เบอร์ติดต่อ</label>
                      <input type="text" className="form-control" onChange={(e)=> setTel(e.target.value)} 
                    
                       value={tel}
                       placeholder='Enter tel'
                       />
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="my_dashboard_review mt30">
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className="mb30">Location</h4>
                    <input type="text" className="form-control" onChange={(e)=> setProvince(e.target.value)}
                    
                      value={province}
                      placeholder='Enter province'
                       />
                  </div>

                  
                 
                  <div className="col-lg-12">
                    <div className="my_profile_setting_input form-group">
                      <div className="h400 bdrs8" id="map-canvas" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-4">
                    <div className="my_profile_setting_input form-group">
                      <label htmlFor="googleMapLat">Latitude (for Google Maps)</label>
                      <input type="text" className="form-control" onChange={(e)=> setLatitide(e.target.value)}
                    
                      value={latitude}
                      placeholder='Enter latitude'
                       />
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-4">
                    <div className="my_profile_setting_input form-group">
                      <label htmlFor="googleMapLong">Longitude (for Google Maps)</label>
                      <input type="text" className="form-control" onChange={(e)=> setLongitude(e.target.value)} 
                    
                      value={longitude}
                      placeholder='Enter longitude'/>
                    </div>
                  </div>
                
                </div>
              </div>
              {/* เป็นส่วนการเพิ่มรูปภาพ  */}
              <div className="my_dashboard_review mt30 center" >
                <div className="row">
                  <div className="col-xl-12">
                    <div className="my_profile_setting_input text-center "> 
                      {/* <button className="btn btn2 float-right">บันทึก</button> */}
                      <input type="button" className="btn btn2 float-right" value="เพิ่มข้อมูล"  onClick={addMyhome} />
                    </div>
                  </div>
                </div>
              </div>
  {/* เป็นส่วนการเพิ่มรูปภาพ  */}
  <Image/>
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
export default Usercreatelist;
