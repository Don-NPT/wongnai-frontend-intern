import React,{ Component} from'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <div>

        <Header />

        <Routes>
          {/* <Route path="/"><Home /></Route> */}
          <Route exact path="/" component={Home} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
