import './App.scss';
import Team from './pages/team';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)
function App() {
  return (
    <div className="App">
      <Team/>
    </div>
  );
}

export default App;
