import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Welcome from "./components/pages/Welcome";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
