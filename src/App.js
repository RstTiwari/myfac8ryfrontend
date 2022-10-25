import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signin from "./component/Signin/Signin";
import Signup from "./component/Signup/Signup";
import SignUpHeader  from "./component/Header/SignUpHeader"
import Home from "./Home";
import Coutomerarea from "./component/Coustomerarea/Coutomerarea";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={
              <>
                <SignUpHeader />
                <Signin />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <SignUpHeader />
                <Signup />
              </>
            }
          />
          <Route
            path="/customerarea"
            element={
              <>
                <SignUpHeader />
                <Coutomerarea />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
