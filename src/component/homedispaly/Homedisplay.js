

import "./Homedisplay.css"
import "../Hero/Hero.css"
import assistant from "../../Assets/virtual-assistant.svg";
import { BiLock } from "react-icons/bi";
import team from "../../Assets/team.jpg";
import aihelp from "../../Assets/aitech2.jpg";


const Homedisplay = () => {

return (
  <>
    <div className="home">
      <div className="carouselDiv">
        <div className="aieffectDiv">
          <h1 className="aitext">Let's AI Work For You</h1>
          <p>
            You Focus on Design and Development, <span>MyFac8ry</span> AI Cloud
            Solution Will Take care Other From
            <span> Part Manufacturing</span>
            <span> Hardwares,</span>
            <span> and Raw-Material</span>
          </p>
          <div className="quotation_button">
            <div className="hero__landing__logo">
              <a href="/customerarea" className="instant__quote__button">
                Try Now For Free
              </a>
            </div>
            {/* <div>
              <p className="secure__lock">
                <BiLock className="fa__lock" />
                All uploads are secure and confidential.
              </p>
            </div> */}
          </div>
        </div>
        <div className="imageDiv">
          <img alt="assistant" src={assistant} />
        </div>
      </div>
    </div>
  </>
);}
export default Homedisplay;