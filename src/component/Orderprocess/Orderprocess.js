import React from 'react'
import "./Orderprocess.css";
import uploadfile from "../../Assets/uploadfile.svg";
import orderPart from "../../Assets/orderparts.svg";
import recivepart from "../../Assets/revice parts.svg";

const Orderprocess = () => {
  return (
    <div>
      <div className="turbocharge__container">
        <div className="turbocharge__title__orderprocess">
          <h2>How to Order PROJECT</h2>
        </div>
        <div className="turbocharge__row">
          <div className="turbocharge__details1">
            <div className="turbocharge__details__text">
              <img alt={"newtworkcapacity"} src={uploadfile} />
              <h3>Upload your CAD files</h3>
              <p>
                To get your instant quote, just upload your files and select
                your production process and material.
              </p>
            </div>
          </div>
          <div className="turbocharge__details1">
            <div className="turbocharge__details__text">
              <img alt={"newtworkcapacity"} src={orderPart} />
              <h3>Place Order</h3>
              <p>
                After placing your order, production will start. You’ll receive
                regular status updates.
              </p>
            </div>
          </div>
          <div className="turbocharge__details1">
            <div className="turbocharge__details__text">
              <img alt={"newtworkcapacity"} src={recivepart} />
              <h3>Receive your parts</h3>
              <p>
                Within a short amount of time, you will receive the parts you
                ordered directly to your shipping address. You can track your
                package at any time in your personal account.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
   
  );
}

export default Orderprocess;