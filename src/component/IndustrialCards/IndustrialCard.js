import React from 'react'
import "./IndustrialCard.css"

const IndustrialCard = () => {
  return (
    <>
      <section className="industrial__card">
        <div className="row">
          <div className="continer__row">
            <div className="industrial__card__desktop">
              <div className="card__header">
                <div className="card__header__title">CNC/Lathe Machining</div>
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={require("../../Assets/CNC_LATH_MACHINING.jpg")}
                />
                <div className="card__header__bottom">
                  Order high-quality precision CNC machined parts from a network
                  of experienced global manufacturers capable of hitting
                  tolerances as tight as +/- 0.002mm. Choose from over 30 metal
                  and plastic materials and finishes.
                </div>
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
                <div className="card__header__bottom">
                  Order high-quality precision CNC machined parts from a network
                  of experienced global manufacturers capable of hitting
                  tolerances as tight as +/- 0.002mm. Choose from over 30 metal
                  and plastic materials and finishes.
                </div>
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
                <div className="card__header__bottom">
                  High-quality laser cutting, bending and post-processing in
                  days. Choose from a variety of sheet metals across a wide
                  range of strength, conductivity, weight, and
                  corrosion-resistance.
                </div>
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
                <div className="card__header__bottom">
                  High-quality laser cutting, bending and post-processing in
                  days. Choose from a variety of sheet metals across a wide
                  range of strength, conductivity, weight, and
                  corrosion-resistance.
                </div>
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
                <div className="card__header__bottom">
                  Whether you’re after low volume or serial production moulding,
                  our experts in rapid tooling, family moulds, multi-cavity
                  moulds or overmoulding will ensure your samples are ready in
                  days.
                </div>
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
                <div className="card__header__bottom">
                  Whether you’re after low volume or serial production moulding,
                  our experts in rapid tooling, family moulds, multi-cavity
                  moulds or overmoulding will ensure your samples are ready in
                  days.
                </div>
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
                <div className="card__header__bottom">
                  From FDM, SLA, SLS and MJF to DMLS printing, we’ve got you
                  covered. Parts can typically be shipped in as little as 3 day,
                  allowing for faster design iterations and speed to market.
                </div>
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
                <div className="card__header__bottom">
                  From FDM, SLA, SLS and MJF to DMLS printing, we’ve got you
                  covered. Parts can typically be shipped in as little as 3 day,
                  allowing for faster design iterations and speed to market.
                </div>
              </div>
            </div>
            <div className="industrial__card__desktop">
              <div className="card__header">
                <div className="card__header__title">Custom Fabrication</div>
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={require("../../Assets/myFac8ry__fabrication.jpeg")}
                />
                <div className="card__header__bottom">
                  Wheather you are designing new Part or Prototype , Our Desgin
                  expert will help you in create you Coustom Fabrication .
                </div>
              </div>
            </div>
            <div className="industrial__card__mobile">
              <div className="card__header">
                <div className="card__header__title">Custom Fabrication</div>
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={require("../../Assets/myFac8ry__fabrication.jpeg")}
                />
                <div className="card__header__bottom">
                  Wheather you are designing new Part or Prototype , Our Desgin
                  expert will help you in create you Coustom Fabrication .
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IndustrialCard
