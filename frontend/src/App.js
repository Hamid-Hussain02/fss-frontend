import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import SingUp from "./pages/SignUp";
import Home from "./pages/Home";
// import Banner from "./components/Banner";
import Payments from "./components/payments";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SingUp />} />
          <Route path="/home" element={<Home />}>
            {/* <Route path="banner" element={<Banner />} /> */}
            <Route path="payments" element={<Payments />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
