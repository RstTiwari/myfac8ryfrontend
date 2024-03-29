import React, { useEffect,useState } from 'react'
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

import "../Coustomerarea/Coustomerarea.css"
import isAuthenticated from "../../Helper/auth";
import Loader from "../../Helper/Loader"
import {userEnquiry}  from "../../API/userApi"


const Coutomerarea =  () => {
  const navigate  = useNavigate()
  const [enquiryFile, setEnquiryFile] = useState(null);
  const [ loader , setLoader]   = useState(false)



  const handelEnquiry = async (e) => {
    e.preventDefault()
    if(!enquiryFile){
      alert("Please Select file")
    }else{
      setLoader(true)
      let number = localStorage.getItem("number")
      const formData =  new FormData()
      formData.append("enquiryFile", enquiryFile);
      console.log(formData)
      let response = await userEnquiry(formData,number)
      if ((response.success = 1)) {
        setLoader(false);
        alert("File uploaded , Our team will contact you");
        navigate("/");
      } else {
        setLoader(false);
        alert(`File upload failed ${response.message}`);
      }

    }

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
    <div>
      {loader === true? (<Loader />): (  <div className="coustmerarea">
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
                Uploading PDF/Excell is the best way to get an instant quote
                <span>
                  <AiOutlineExclamationCircle />
                </span>
              </p>
            </div>
            <form onSubmit={handelEnquiry}>
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
    </div>)}
  
    </div>
 
  );
}

export default Coutomerarea
