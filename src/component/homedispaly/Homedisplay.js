

import "./Homedisplay.css"
import "../Hero/Hero.css"
import assistant from "../../Assets/virtual-assistant.svg";
import { BiLock } from "react-icons/bi";
import team from "../../Assets/team.jpg";

const Homedisplay = () => {

return (
  <>
    <div className="home">
      <div className="carouselDiv">
        <div className="aieffectDiv">
          <h1 className="aitext">Let's AI Work For You</h1>
          <p>
            You Focus on product Development, <span>MyFac8ry</span> will arrange
            everything at your factory.
            <span> Part Manufactuirng,</span>
            <span> Hardwares,</span>
            <span> Raw Material</span>
          </p>
          <div className="quotation_button">
            <div className="hero__landing__logo">
              <a href="/customerarea" className="instant__quote__button">
                Get Your Instant Quote
              </a>
            </div>
            <div>
              <p className="secure__lock">
                <BiLock className="fa__lock" />
                All uploads are secure and confidential.
              </p>
            </div>
          </div>
        </div>
        <div className="imageDiv">
          <img alt="assistant" src={assistant} />
        </div>
      </div>
      {/* <div className="carouselDiv">
        <div className="aieffectDiv">
          <h1 className="aitext">
            {" "}
            AI Powered Softwares to Manage your Team Like Never Before
          </h1>
          <p>
            With our AI solution softwares , manage your team at one place
            Assign Work track Record ,{" "}
            <span>MyFac8ry AI Solutions help u in </span> ,
            <span> Accounts,</span>
            <span> Inventory,</span>
            <span> Design ,</span>
            <span> Quality </span>
          </p>
          <div className="quotation_button">
            <div className="hero__landing__logo">
              <a href="/feetrailPage" className="instant__quote__button">
                Start Your Free Trial
              </a>
            </div>
          </div>
        </div>
        <div className="imageDiv">
          <img alt="assistant" src={team} />
        </div>
      </div> */}
    </div>
  </>
);}
export default Homedisplay;