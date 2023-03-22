import React from 'react'
import "./Turbocharge.css"
import masscapcity from "../../Assets/massivenetworkcapacity1-01-1.svg"
import quoteEnine from "../../Assets/myfac8ryinstantquote.svg";
import statusUpdate from "../../Assets/statusMyfactory.svg";
import uploadfile from "../../Assets/uploadfile.svg";
import orderPart from "../../Assets/orderparts.svg";
import recivepart from "../../Assets/revice parts.svg";
const Turbocharge = () => {
  return (
    <div className="turbocharge">
      <div className="turbocharge__container">
        <div className="turbocharge__title">
          <h2>TURBOCHARGE YOUR INDUSTRIAL NEEDS</h2>
        </div>
        <div className="turbocharge__row">
          <div className="turbocharge__details1">
            <div className="turbocharge__details__text">
              <img alt={"newtworkcapacity"} src={masscapcity} />
              <h3>Massive Network Capacity</h3>
              <p>
                Instantly access the production capacity of over 200
                manufacturers with wide-ranging capabilities and certifications
                across Vasai. From your desktop. Strict NDA with our network to
                protect privacy.
              </p>
            </div>
          </div>
          <div className="turbocharge__details1">
            <div className="turbocharge__details__text">
              <img alt={"newtworkcapacity"} src={quoteEnine} />
              <h3>Instant Quoting Engine</h3>
              <p>
                Get DFM feedback, lead times, and pricing in a matter of clicks,
                not days. myFac8ry IQ℠ puts Data Science to work for you so you
                can easily choose the optimal price/lead time option for your
                project. Compatible with STEP, Mesh, Parasolid, and ACIS files
              </p>
            </div>
          </div>
          <div className="turbocharge__details1">
            <div className="turbocharge__details__text">
              <img alt={"newtworkcapacity"} src={statusUpdate} />
              <h3>Status Updates and Guaranteed Quality</h3>
              <p>
                With strong quality assurance and regular status updates, you
                can trust that your part will arrive right, and right on time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="turbocharge__container">
        <div className="turbocharge__title__orderprocess">
          <h2>How to Order Parts</h2>
        </div>
        <div className="turbocharge__row">
          <div className="turbocharge__details1">
            <div className="turbocharge__details__text">
              <img alt={"newtworkcapacity"} src={uploadfile} />
              <h3>Upload your  files</h3>
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

export default Turbocharge
