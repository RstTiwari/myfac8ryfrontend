import React, { useEffect,useState } from 'react'
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

import "../Coustomerarea/Coustomerarea.css"
import isAuthenticated from "../../Helper/auth";

const Coutomerarea = () => {
  const navigate  = useNavigate()
  const [selectFile ,setSelectFile] = useState()
  const handleSubmit = (e)=>{
    setSelectFile(selectFile)
    console.log(selectFile);
  }
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
            <h2>Upload your models</h2>
            <div className="coustmerarea__title1">
              <p>
                Uploading CADs is the best way to get an instant quote
                <span>
                  <AiOutlineExclamationCircle />
                </span>
              </p>
            </div>

            <input
            className='coustmer__input'
            onChange={(e)=>{
              setSelectFile(e.target.files[0])
            }}
            type={"file"}
            />
            <button onClick={handleSubmit}>Upload a Model!</button>

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
