import "./App.css";
import { Home, Navbar} from "./components";
import { Header, Features, Blog, Footers } from "./containers";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Hello I am Solato Library</h3>
        <Navbar />
        <Home />
      </header>
    </div>
  );
}

export default App;
