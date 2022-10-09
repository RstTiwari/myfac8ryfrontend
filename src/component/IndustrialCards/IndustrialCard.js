import React from 'react'
import "./IndustrialCard.css"

const IndustrialCard = () => {
  return (
    <section className="industrial__card">
      <div className="row">
        <div className="continer__row">
          <div className="industrial__card__desktop">
            <div className="card__header">
              <div className="card__header__title">CNC Machining</div>
              <img
                className="card__header__icon"
                alt="industryicon"
                src={require("../../Assets/myFac8ry__cnc_machining.jpeg")}
              />
            </div>
          </div>
          <div className="industrial__card__mobile">
            <div className="card__header">
              <div className="card__header__title">Shee</div>
              <img
                className="card__header__icon"
                alt="industryicon"
                src={require("../../Assets/myFac8ry__cnc_machining.jpeg")}
              />
            </div>
          </div>
          <div className="industrial__card__desktop">
            <div className="card__header">
              <div className="card__header__title">Sheet Metal Fabrication</div>
              <img
                className="card__header__icon"
                alt="industryicon"
                src={require("../../Assets/myFac8ry__sheetmetal__fabrication.jpeg")}
              />
            </div>
          </div>
          <div className="industrial__card__mobile">
            <div className="card__header">
              <div className="card__header__title">CNC MACHINING</div>
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
              <div className="card__header__title">CNC MACHINING</div>
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
              <div className="card__header__title">CNC MACHINING</div>
            </div>
          </div>
          <div className="industrial__card__desktop">
            <div className="card__header">
              <div className="card__header__title"> Fabrication</div>
              <img
                className="card__header__icon"
                alt="industryicon"
                src={require("../../Assets/myFac8ry__fabrication.jpeg")}
              />
            </div>
          </div>
          <div className="industrial__card__mobile">
            <div className="card__header">
              <div className="card__header__title">CNC MACHINING</div>
            </div>
          </div>
          <div className="industrial__card__desktop">
            <div className="card__header">
              <div className="card__header__title">Lathe/ Turnning</div>
              <img
                className="card__header__icon"
                alt="industryicon"
                src={require("../../Assets/myFac8ry__lathe__turrning.jpeg")}
              />
            </div>
          </div>
          <div className="industrial__card__mobile">
            <div className="card__header">
              <div className="card__header__title">CNC MACHINING</div>
            </div>
          </div>
          <div className="industrial__card__desktop">
            <div className="card__header">
              <div className="card__header__title">Lasser Cutting</div>
              <img
                className="card__header__icon"
                alt="industryicon"
                src={require("../../Assets/myFac8ry__lasserCutting.jpg")}
              />
            </div>
          </div>
          <div className="industrial__card__mobile">
            <div className="card__header">
              <div className="card__header__title">CNC MACHINING</div>
            </div>
          </div>
          <div className="industrial__card__desktop">
            <div className="card__header">
              <div className="card__header__title">Powder Coating</div>
              <img
                className="card__header__icon"
                alt="industryicon"
                src={require("../../Assets/myFac8ry__lathe__powder_coating__plating.jpeg")}
              />
            </div>
          </div>
          <div className="industrial__card__mobile">
            <div className="card__header">
              <div className="card__header__title">CNC MACHINING</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustrialCard
