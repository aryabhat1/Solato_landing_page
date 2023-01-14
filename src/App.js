import "./App.css";
import { /* Contact */ /*Home */ Navbar, Brands, CTA } from "./components";
import {
    Header,
    Features,
    Blog,
    Footer,
    WhatSolato,
    Developers,
    Resources,
} from "./containers";

function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
                {/* <h3>Hello I am Solato Library</h3> */}
                <Navbar />
                <Header />
            </div>

            {/* <Home /> */}
            <Brands />
            <WhatSolato />
            <Features />
            <Developers />
            <CTA />
            <Resources />
            <Blog />
            {/* <Contact /> */}
            <Footer />
        </div>
    );
}

export default App;
