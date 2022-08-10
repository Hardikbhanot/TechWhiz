import "./App.scss";
import Team from "./pages/team";
import Club from "./pages/clubs";
import Home from "./pages/Home";
import Signup from "./components/signup/signup";
import Navbar from "./components/LayoutComponents/Navbar/navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from"./components/About/About";
import Footer from "./components/LayoutComponents/footer/footer";

library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <Navbar style={{ color: "white" }} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/club" element={<Club />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
