import "./App.scss";
import Team from "./pages/team";
import Club from './pages/clubs';
import Hero from "./components/hero/heroMain";
import Navbar from "./components/LayoutComponents/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Lottie from "react-lottie";
// import heroContent from "./components/hero/heroContent";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Hero/>}/>
          <Route exact path="/team" element={<Team/>}/>
          <Route exact path="/club" element={<Club/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;