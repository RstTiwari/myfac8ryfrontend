import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <body>
      <div class="circle"></div>
      <div class="container">
        <div class="dot dot1">Please Wait</div>
        <div class="dot dot2"></div>
        <div class="dot dot3"></div>
        <p></p>
      </div>
    </body>
  );
};

export default Loader;
