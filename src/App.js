import "./App.css";
import { Contact, Home, Navbar} from "./components";
import { Header, Features, Blog, Footers } from "./containers";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Hello I am Solato Library</h3>
        <Navbar />
        <Header />
        <Home />
      </header>
      <Contact />
    </div>
  );
}

export default App;
