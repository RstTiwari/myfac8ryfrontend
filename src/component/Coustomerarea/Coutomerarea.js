import React, { useEffect,useState } from 'react'
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

import "../Coustomerarea/Coustomerarea.css"
import isAuthenticated from "../../Helper/auth";
import axios from 'axios';

let dev = true;
let url = "https://myfac8ryapi.vercel.app/api/";
if (dev) {
  url = "http://localhost:4000/api/";
}

const Coutomerarea =  () => {
  const navigate  = useNavigate()
  const [enquiryFile, setEnquiryFile] = useState(null);



  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData =  new FormData()
    formData.append("enquiryFile", enquiryFile);
    const config = {
      method: "post",
      url: `${url}/sendfile`,
      headers: { "Contetnt-Type": "multipart/form-data" },
      data: formData,
    };

    let data = await axios(config)
  };
    const handleFileChange = (e) => {
      const data = e.target.files[0];
      setEnquiryFile(data);
    };
  const checkLoggedIn = async () => {
    let response = await isAuthenticated();
    if (response) {
      return;
    }
    navigate("/signin")
    alert("Please Login to get Quote");
  };

  useEffect(() => {
    checkLoggedIn();
  }); 
  return (
    <div className="coustmerarea">
      <div className="coustmerarea__container">
        <div className="coustmerarea_row">
          <div className="coustmerarea__images">
            <img
              alt="coustmerarea1"
              src={require("../../Assets/coustmerarea1.png")}
            />
            <img
              alt="coustmerarea1"
              src={require("../../Assets/coustmerarea2.png")}
            />
            <img
              alt="coustmerarea1"
              src={require("../../Assets/coustmerarea3.png")}
            />
          </div>
          <div className="coustmerarea__title">
            <h2>Upload your models/Files</h2>
            <div className="coustmerarea__title1">
              <p>
                Uploading PDF is the best way to get an instant quote
                <span>
                  <AiOutlineExclamationCircle />
                </span>
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                className="coustmer__input"
                onChange= {handleFileChange}
                name = "file"
                type="file"
              />
              <button type="submit">Upload a Model/File </button>
            </form>

            <div className="coustmerarea__title2">
              <p>
                <BiLock className="fa__lock" />
                All uploads are secure and confidential
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coutomerarea
