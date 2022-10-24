import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signin from "./component/Signin/Signin";
import Signup from "./component/Signup/Signup";
import Home from "./Home";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
