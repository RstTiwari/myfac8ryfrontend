import React from 'react'
import "./IndustrialCard.css"
import AiMl from "../../Assets/myfac8ry_ai.jpg"
import hardware from "../../Assets/jelleke-vanooteghem-6NUlOHM40w8-unsplash (1).jpg"
import mechanical from "../../Assets/mechanical_image_icon.jpg"
import industrial from "../../Assets/possessed-photography-dRMQiAubdws-unsplash.jpg"

const IndustrialCard = () => {
  return (
    <>
      <section className="industrial__card">
        <div className="row">
          <div className="continer__row">
            <div className="industrial__card__desktop">
              <div className="card__header">
                <div className="card__header__title">AI-ML PROJECTS</div>
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={AiMl}
                />
                <div className="card__header__bottom">
                  Our AI and Machine Learning project aims to revolutionize how
                  we engage with and satisfy our customers. By harnessing the
                  power of artificial intelligence and machine learning,
                </div>
              </div>
            </div>
            <div className="industrial__card__mobile">
              <div className="card__header">
                <div className="card__header__title">AI-ML PROJECTS</div>
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={AiMl}
                />
                <div className="card__header__bottom">
                  Our AI and Machine Learning project aims to revolutionize how
                  we engage with and satisfy our customers. By harnessing the
                  power of artificial intelligence and machine learning,
                </div>
              </div>
            </div>
            <div className="industrial__card__desktop">
              <div className="card__header">
                <div className="card__header__title">HARDWARE PROJECTS</div>
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={hardware}
                />
                <div className="card__header__bottom">
                  This project leverages cutting-edge hardware technologies to
                  transform traditional world into smart, connected living
                  spaces.
                </div>
              </div>
            </div>
            <div className="industrial__card__mobile">
              <div className="card__header">
                <div className="card__header__title">HARDWARE PROJECTS</div>
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={hardware}
                />
                <div className="card__header__bottom">
                  This project leverages cutting-edge hardware technologies to
                  transform traditional wolrd into smart, connected living
                  spaces.
                </div>
              </div>
            </div>
            <div className="industrial__card__desktop">
              <div className="card__header">
                <div className="card__header__title">MECHANICAL PROJECTS</div>
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={mechanical}
                />
                <div className="card__header__bottom">
                  Our mechanical engineering project aims to design and
                  fabricate an innovative Automated Manufacturing System that
                  optimizes production processes.
                </div>
              </div>
            </div>
            <div className="industrial__card__mobile">
              <div className="card__header">
                <div className="card__header__title">MECHANICAL PROJECTS</div>

                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={mechanical}
                />
                <div className="card__header__bottom">
                  Our mechanical engineering project aims to design and
                  fabricate an innovative Automated Manufacturing System that
                  optimizes production processes.
                </div>
              </div>
            </div>
            <div className="industrial__card__desktop">
              <div className="card__header">
                <div className="card__header__title">INDUSTRIAL PROJECTS</div>
                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={industrial}
                />
                <div className="card__header__bottom">
                  Our industrial project aims to modernize and enhance the
                  efficiency of our industrial operations to meet the evolving
                  demands of the market{" "}
                </div>
              </div>
            </div>
            <div className="industrial__card__mobile">
              <div className="card__header">
                <div className="card__header__title">INDUSTRIAL PROJECTS</div>

                <img
                  className="card__header__icon"
                  alt="industryicon"
                  src={industrial}
                />
                <div className="card__header__bottom">
                  Our industrial project aims to modernize and enhance the
                  efficiency of our industrial operations to meet the evolving
                  demands of the market
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
