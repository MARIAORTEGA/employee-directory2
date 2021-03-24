import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
//import Blog from "./pages/Blog";
//import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        {/* <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>
  );
}

export default App;
