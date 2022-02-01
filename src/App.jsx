import "./App.scss";
import Team from "./pages/team";
import Club from "./pages/clubs";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Lottie from "react-lottie";
import {Route,Routes} from 'react-router-dom';
import Footer from "./components/LayoutComponents/footer/footer";
import Juicer from './components/juicer/Juicer';
library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Team/>}/>
      <Route path='/clubs' element={<Club/>}/>
      </Routes>
      <Juicer/>
      <Footer/>
   </div>
  );
}

export default App;
