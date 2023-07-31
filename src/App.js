import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signin from "./component/Signin/Signin";
import Signup from "./component/Signup/Signup";
import Header  from "./component/Header/Header"
import Home from "./Home";
import Coutomerarea from "./component/Coustomerarea/Coutomerarea";
import CNCMachinging from "./Pages/CNCMachinging";
import SheetMetal from "./Pages/SheetMetal";
import InjectionMolding from "./Pages/InjectionMolding";
import ThreeDPriting from "./Pages/3DPrinting";
import CoustomFabrication from "./Pages/CustomFabrication";
import AboutUs from "./Pages/Aboutus";






function App() {
  return (
    <>
      <Header />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cncmachining/" element={<CNCMachinging />} />
            <Route path="/sheetmetal/" element={<SheetMetal />} />
            <Route path="/injectionmolding/" element={<InjectionMolding />} />
            <Route path="/3dprinting/" element={<ThreeDPriting />} />
            <Route
              path="/customfabrication/"
              element={<CoustomFabrication />}
            />
            <Route path="/aboutus/" element={<AboutUs />} />

            <Route
              path="/signin"
              element={
                <>
                  <Signin />
                </>
              }
            />
            <Route
              path="/signup"
              element={
                <>
                  <Signup />
                </>
              }
            />
            <Route
              path="/customerarea"
              element={
                <>
                  <Coutomerarea />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
