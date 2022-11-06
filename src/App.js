import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signin from "./component/Signin/Signin";
import Signup from "./component/Signup/Signup";
import Header  from "./component/Header/Header"
import Home from "./Home";
import Coutomerarea from "./component/Coustomerarea/Coutomerarea";

function App() {
  return (
    <>
      <Header />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} onEnter={requireAuth} />
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
