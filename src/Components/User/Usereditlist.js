import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Usernavbarpc from './Usernavbarpc'
import Usernavbarmobile from './Usernavbarmobile'
import Userfooter from './Userfooter'

const Usereditlist =()=> {
    let url = 'http://ok-myhome.herokuapp.com/api/home'   
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

    const updateMyhome = async (id) => {
        const result = await axios.put(`http://ok-myhome.herokuapp.com/api/edit/${id}`,{
            name,des,latitude,longitude,tel,price,area,type,category,province
        })      
        setName(result.data.name)
        setDes(result.data.des)
        setLatitide(result.data.latitude)
        setLongitude(result.data.longitude)
        setTel(result.data.tel)
        setPrice(result.data.price)
        setArea(result.data.area)
        setType(result.data.type)
        setCategory(result.data.category)
        setProvince(result.data.province)
        getMyhome();
    }
    

    const deleteMyhome = async (id) => {
        await axios.delete(`http://ok-myhome.herokuapp.com/api/edit/${id}`)
        getMyhome()
    }   

    const printMyhome = () => {
        if ( myhome && myhome.length )
            return myhome.map((admin,index) => {
                return (
                    
                    <li key={index}>
                        
                       {admin.name} : {admin.des} : {admin.tel} : {admin.latitude} :{admin.longitude} : {admin.price} : {admin.type} : {admin.category} : {admin.province}
                       <button onClick={ ()=> updateMyhome(admin.id)}>UPDATE</button> 
                       <button onClick={ ()=> deleteMyhome(admin.id)}>DELETE</button>

                       <div className="col-lg-12">
              <div className="my_dashboard_review">
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className="mb30">สร้างข้อมูล</h4>
                    <div className="my_profile_setting_input form-group">
                      <label htmlFor="propertyTitle">ชื่อโครงการ</label>
                      <input type="text" className="form-control" id="propertyTitle" />
                   

                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="my_profile_setting_textarea">
                      <label htmlFor="propertyDescription">อธิบายรายละเอียด</label>
                      <textarea className="form-control" id="propertyDescription" rows={7} defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-6">
                    <div className="my_profile_setting_input ui_kit_select_search form-group">
                      <label>เลือกประกาศ</label>
                      <select className="selectpicker" data-live-search="true" data-width="100%">
                        <option data-tokens="type1">ขาย</option>
                        <option data-tokens="Type2">เช่า</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-6">
                    <div className="my_profile_setting_input ui_kit_select_search form-group">
                      <label>เลือกประเภท</label>
                      <select className="selectpicker" data-live-search="true" data-width="100%">
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
                      <input type="text" className="form-control" id="formGroupExamplePrice" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-4">
                    <div className="my_profile_setting_input form-group">
                      <label htmlFor="formGroupExampleArea">พื้นที่</label>
                      <input type="text" className="form-control" id="formGroupExampleArea" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-4">
                    <div className="my_profile_setting_input form-group">
                      <label htmlFor="formGroupExampleArea">เบอร์ติดต่อ</label>
                      <input type="text" className="form-control" id="formGroupExampleArea" />
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="my_dashboard_review mt30">
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className="mb30">Location</h4>

                  </div>

                  
                 
                  <div className="col-lg-12">
                    <div className="my_profile_setting_input form-group">
                      <div className="h400 bdrs8" id="map-canvas" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-4">
                    <div className="my_profile_setting_input form-group">
                      <label htmlFor="googleMapLat">Latitude (for Google Maps)</label>
                      <input type="text" className="form-control" id="googleMapLat" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-4">
                    <div className="my_profile_setting_input form-group">
                      <label htmlFor="googleMapLong">Longitude (for Google Maps)</label>
                      <input type="text" className="form-control" id="googleMapLong" />
                    </div>
                  </div>
                
                </div>
              </div>
              {/* เป็นส่วนการเพิ่มรูปภาพ  */}
           {/* <Image/> */}
  
            </div>

                       </li>
                )
             
            })
        else {
            return (<h2>No Keephome </h2>)
        }

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
                    
                {printMyhome()}
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
                    
          <br/>
            
           GET MY HOME : {name} {des} {tel} {latitude} {longitude} {price} {type} {area} {category} {province} 

           <br/>
                <input 
                onChange={(e)=> setName(e.target.value)}
                type='text'
                value={name}
                name='name'
                placeholder='Enter name'
                /><br/>

                <input
                onChange={(e)=> setDes(e.target.value)}
                type='text'
                value={des}
                name='des'
                placeholder='Enter description'
                /><br/>

                <input
                onChange={(e)=> setTel(e.target.value)}
                type='text'
                value={tel}
                name='tel'
                placeholder='Enter tel'
                /><br/>

                <input
                onChange={(e)=> setLatitide(e.target.value)}
                type='text'
                value={latitude}
                name='latitude'
                placeholder='Enter latitude'
                /><br/>
                
                <input
                onChange={(e)=> setLongitude(e.target.value)}
                type='text'
                value={longitude}
                name='longitude'
                placeholder='Enter longitude'
                /><br/>


                <input 
                onChange={(e)=> setPrice(e.target.value)}
                type='text'
                value={price}
                name='price'
                placeholder='Enter price'
                /><br/>

               <input 
                onChange={(e)=> setArea(e.target.value)}
                type='text'
                value={area}
                name='area'
                placeholder='Enter area'
                /><br/>

                <input 
                onChange={(e)=> setType(e.target.value)}
                type='text'
                value={type}
                name='type'
                placeholder='Enter type'
                /><br/>
                
                <input 
                onChange={(e)=> setCategory(e.target.value)}
                type='text'
                value={category}
                name='category'
                placeholder='Enter category'
                /><br/>

                <input 
                onChange={(e)=> setProvince(e.target.value)}
                type='text'
                value={province}
                name='province'
                placeholder='Enter province'
                /><br/>

                 <button  onClick={addMyhome}>ADD MY HOME</button>  
        </div>
    )
  
 }

 export default Usereditlist;