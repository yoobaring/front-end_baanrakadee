import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Listmenu =()=> {
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

 

    const updateMyhome = async (id) => {
        const result = await axios.put(`https://ok-myhome.herokuapp.com/api/edit/${id}`,{
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
        await axios.delete(`https://ok-myhome.herokuapp.com/api/edit/${id}`)
        
    } 
    getMyhome()

    const printMyhome = () => {
        if ( myhome && myhome.length )

            return myhome.map((admin,index) => {
                return (
                    <div className="table-responsive mt0">
                    <table className="table">
                
                      <tbody>
                        <tr key={index}>
                        <th scope="row">
                        <div className="feat_property list favorite_page style2">
                            <div className="thumb">
                            <img className="img-whp" src="images/property/fp2.jpg" alt="fp2.jpg" />
                            <div className="thmb_cntnt">
                                <ul className="tag mb0">
                                <li className="list-inline-item dn" />
                                <li className="list-inline-item"><a href="#">{admin.type}</a></li>
                                </ul>
                            </div>
                            </div>
                            <div className="details">
                            <div className="tc_content">
                                <h4>{admin.name}</h4>
                                <p><span className="flaticon-placeholder" /> {admin.province}</p>
                                <a className="fp_price text-thm" href="#">{admin.price}<small>บาท</small></a>
                            </div>
                            </div>
                        </div>
                        </th>
                        <td>{admin.date}</td>
                        <td><span className="status_tag badge2">Published</span></td>
                        <td>2,345</td>
                        <td>
                        <ul className="view_edit_delete_list mb0">
                            <li onClick={ ()=> updateMyhome(admin.id)} className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Edit"><a href="#"><span className="flaticon-edit" /></a></li>
                            <li onClick={ ()=> deleteMyhome(admin.id)} className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Delete"><a href="#"><span className="flaticon-garbage" /></a></li>
                        </ul>
                        </td>
                        </tr>
                        </tbody>
                    </table>
                  </div>
                )
             
            })
        else {
            return (<h2>โปรดรอสักครู่..กำลังอัพเดตรายการ หรือ อาจไม่มีรายการอยู่เลย </h2>)
        }

    }

    return (
        <div >     
           
                {printMyhome()}
         
          
        </div>
    )
  
 }

 export default Listmenu;
 