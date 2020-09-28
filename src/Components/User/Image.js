import React, { useState } from 'react'
import axios from 'axios'


// const API_BASE = "http://localhost:4444"
const API_BASE = "https://ok-myhome.herokuapp.com"


function submitForm(contentType, data, setResponse) {

    console.log('data ', data);

    axios({
        url: `${API_BASE}/uploads/upload`,
        method: 'POST',
        data: data,
        headers: {
            'Content-Type': contentType
        }
    }).then((response) => {
        setResponse(response.data);
    }).catch((error) => {
        setResponse("error");
    })
}

export default function AddNewhome() {

    const [Files, setFiles] = useState(null)




    function uploadWithFormData() {
        console.log('data', Files);

        const formData = new FormData();
        for (let i = 0; i < Files.length; i++) {
            formData.append(`file`, Files[i])
        }

        console.log(formData);

        submitForm("multipart/form-data", formData, (msg) => console.log(msg));
    }

    return (
        <div>

            <div className="my_dashboard_review mt30">
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className="mb30">รูปภาพ</h4>
                  </div>
                
                  <div className="col-lg-12">
                    <div className="portfolio_upload">
                    <input type="file" name="file" onChange={e => setFiles(e.target.files)} multiple />
                      <div className="icon"><span className="flaticon-download" /></div>
                      <p>Drag and drop images here</p>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="resume_uploader mb30">
                      <h4>ไฟล์รูป</h4>
                      <form className="form-inline">
                        <input className="upload-path" />
                        <label className="upload">
                          <input type="file" />
                          เพิ่มรูปภาพ
                        </label>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my_dashboard_review mt30 center" >
                <div className="row">
                  <div className="col-xl-12">
                    <div className="my_profile_setting_input text-center "> 
                      {/* <button className="btn btn2 float-right">บันทึก</button> */}
                      <input type="button" className="btn btn2 float-right" value="Upload as Form" onClick={uploadWithFormData} />
                    </div>
                  </div>
                </div>
              </div>
        </div>
    )
}
