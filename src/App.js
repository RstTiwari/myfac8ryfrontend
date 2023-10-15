import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signin from "./component/Signin/Signin";
import Signup from "./component/Signup/Signup";
import Header  from "./component/Header/Header"
import Home from "./Home";
import Coutomerarea from "./component/Coustomerarea/Coutomerarea";
import ProjectList from "./Pages/ProjectList";
import SheetMetal from "./Pages/SheetMetal";
import InjectionMolding from "./Pages/InjectionMolding";
import ThreeDPriting from "./Pages/3DPrinting";
import CoustomFabrication from "./Pages/CustomFabrication";
import AboutUs from "./Pages/Aboutus";
import ProjectDetails from "./Pages/ProjectDetails";
import MiniProjectList from "./Pages/MiniProjectList";






function App() {
  return (
    <>
      <Router>
        <Header />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-ml/" element={<ProjectList type="ai-ml" />} />
            <Route
              path="/hardware/"
              element={<ProjectList type="hardware" />}
            />
            <Route
              path="/mechanical/"
              element={<ProjectList type="mechanical" />}
            />
              <Route
              path="/mini-mechanical/"
              element={<MiniProjectList type="mechanical" price = {5000} />}
            />
            <Route
              path="/industrial/"
              element={<ProjectList type="industrial" />}
            />
            <Route
              path="/productDetails/:projectId"
              element={<ProjectDetails />}
            />

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
