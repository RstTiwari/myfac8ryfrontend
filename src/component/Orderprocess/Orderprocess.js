import React from 'react'
import "./Orderprocess.css";

const Orderprocess = () => {
  return (
    <div className="order__process">
      <div className="order__process_container">
        <div className="order__process_row">
          <ol class="ProgressBar">
            <li class="ProgressBar-step">
              <svg class="ProgressBar-icon">
                <use />
              </svg>
              <span class="ProgressBar-stepLabel">
                instant quote
                <p>Upload your File to our online quoting platform</p>
              </span>
            </li>
            <li class="ProgressBar-step">
              <svg class="ProgressBar-icon">
                <use />
              </svg>
              <span class="ProgressBar-stepLabel">
                Confirm specs
                <p>
                  Configure your part specifications and select a lead time that
                  suits your schedule
                </p>
              </span>
            </li>
            <li class="ProgressBar-step">
              <svg class="ProgressBar-icon">
                <use />
              </svg>
              <span class="ProgressBar-stepLabel">
                Production
                <p>
                  We select the best manufacturer for your order, and production
                  begins immediately
                </p>
              </span>
            </li>
            <li class="ProgressBar-step">
              <svg class="ProgressBar-icon">
                <use />
              </svg>
              <span class="ProgressBar-stepLabel">
                Quality control
                <p>
                  We take full responsibility for making sure your parts are
                  manufactured according to our standards
                </p>
              </span>
            </li>
            <li class="ProgressBar-step">
              <svg class="ProgressBar-icon">
                <use />
              </svg>
              <span class="ProgressBar-stepLabel">Delivery</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Orderprocess;