import React from 'react'
import "./Turbocharge.css"

const Turbocharge = () => {
  return (
    <section className="turbocharge">
      <div className="turbocharge__container">
        <div className="turbocharge__title">
          <h2>Turbocharge the way you make custom parts</h2>
        </div>
        <div className="turbocharge__row">
          <div className="turbocharge__details1">
            <div className="turbocharge__details__text">
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
              <h3>Status Updates and Guaranteed Quality</h3>
              <p>
                With strong quality assurance and regular status updates, you
                can trust that your part will arrive right, and right on time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Turbocharge
