import React,{ Component} from'react';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import Navbar from"./components/navbar";
import Home from "./components/home";
import Aboutus from "./components/aboutus";
import Login from "./components/login";
import Register from "./components/register";
import Search from "./components/search";
import Result from "./components/result";
import Admin from "./components/admin";

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
        <Navbar />
        
          <Route exact path="/"><Home/></Route>
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/search" component={Search} />
          <Route path="/result" component={Result} />
          <Route path="/admin" component={Admin} />
      
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
