import "./App.scss";
import Team from "./pages/team";
import Club from "./pages/clubs";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Lottie from "react-lottie";

library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <Club />
     {/* <Team/> */}
    </div>
  );
}

export default App;
