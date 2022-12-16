import React from 'react'
import "./IndustrialCard.css"

const IndustrialCard = () => {
  return (
    <>
      <section className="industrial__card">
        {/* <div className="row">
          <div className="continer__row">
            <div className="industrial__card__desktop">
              <div className="card__header">
                <div className="card__header__title">CNC/Lathe Machining</div>
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={require("../../Assets/CNC_LATH_MACHINING.jpg")}
                />
              </div>
            </div>
            <div className="industrial__card__mobile">
              <div className="card__header">
                <div className="card__header__title">CNC/Lathe Machining</div>
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={require("../../Assets/CNC_LATH_MACHINING.jpg")}
                />
              </div>
            </div>
            <div className="industrial__card__desktop">
              <div className="card__header">
                <div className="card__header__title">
                  Sheet Metal Fabrication
                </div>
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={require("../../Assets/myFac8ry__sheetmetal__fabrication.jpeg")}
                />
              </div>
            </div>
            <div className="industrial__card__mobile">
              <div className="card__header">
                <div className="card__header__title">
                  Sheet Metal Fabrication
                </div>
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={require("../../Assets/myFac8ry__sheetmetal__fabrication.jpeg")}
                />
              </div>
            </div>
            <div className="industrial__card__desktop">
              <div className="card__header">
                <div className="card__header__title">Injection Molding</div>
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={require("../../Assets/myFac8ry__injectionMolding.jpg")}
                />
              </div>
            </div>
            <div className="industrial__card__mobile">
              <div className="card__header">
                <div className="card__header__title">Injection Molding</div>

                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={require("../../Assets/myFac8ry__injectionMolding.jpg")}
                />
              </div>
            </div>
            <div className="industrial__card__desktop">
              <div className="card__header">
                <div className="card__header__title">3D Printing</div>
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={require("../../Assets/myFac8ry__lathe__3dprinting.jpeg")}
                />
              </div>
            </div>
            <div className="industrial__card__mobile">
              <div className="card__header">
                <div className="card__header__title">3D Printing</div>

                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={require("../../Assets/myFac8ry__lathe__3dprinting.jpeg")}
                />
              </div>
            </div>
            <div className="industrial__card__desktop">
              <div className="card__header">
                <div className="card__header__title">
                  Custom Fabrication
                </div>
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={require("../../Assets/myFac8ry__fabrication.jpeg")}
                />
              </div>
            </div>
            <div className="industrial__card__mobile">
              <div className="card__header">
                <div className="card__header__title">
                  Custom Fabrication
                </div>
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={require("../../Assets/myFac8ry__fabrication.jpeg")}
                />
              </div>
            </div>
          </div>
        </div> */}

        <div className="industrial__other_services">
          <div className="other_services_container">
            <div className="other_services_row">
              <div className="card__header">
                
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={require("../../Assets/indutrailManufacturing.jpg")}
                />
                <div className="card__header__title">Industrial Manufacturing</div>
              </div>
              <div className="card__header">
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={require("../../Assets/indutrailHardwares.jpg")}
                />
                <div className="card__header__title"> Industrial Hardwares</div>

              </div>
              <div className="card__header">
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={require("../../Assets/indutrailRawMaterail.jpg")}
                />
                <div className="card__header__title">Industrial Raw Material</div>

              </div>
              <div className="card__header">
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={require("../../Assets/indutrailSoftware.jpg")}
                />
                <div className="card__header__title">Industrial Softwares</div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IndustrialCard
