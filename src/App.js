import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import IndustrialCard from "./component/IndustrialCards/IndustrialCard";

import Signin   from "./component/Signin/Signin"
import Signup from "./component/Signup/Signup";
import Turbocharge from "./component/Turbocharge/Turbocharge";
import Orderprocess from "./component/Orderprocess/Orderprocess";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <IndustrialCard />
                <Turbocharge />
                <Orderprocess />
              </>
            }
          />
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
