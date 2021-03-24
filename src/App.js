import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
//import Projects from "./pages/projects";
//import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        {/* <Route exact path="/projects" component={Projects} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>
  );
}

export default App;
