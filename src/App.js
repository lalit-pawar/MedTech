import "./App.css";
import {BrowserRouter as Router, Switch, Route, HashRouter,} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"; 
import Find_Doctors from "./Components/Find Doctors";
import Patient from "./Components/Patient";
import Video_Consult from "./Components/Video Consult";
import GetDetails from "./Components/GetDetails";
import Insurence from "./Components/Insurence";
import WhitelistDoctor from "./Components/WhitelistDoctor";


function App() {
  return (
    <>
          <Navbar />
          <HashRouter basename="/">
        <div className="App">
          <Switch>
            
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/Find Doctors">
              <Find_Doctors />
            </Route>

            <Route exact path="/Video Consult">
              <Video_Consult/>
            </Route>

            <Route exact path="/Patient">
              <Patient/>
            </Route>

            <Route exact path="/GetDetails">
              <GetDetails/>
            </Route>
            
            <Route exact path="/WhitelistDoctor">
              <WhitelistDoctor/>
            </Route>

            <Route exact path="/Insurence">
              <Insurence/>
            </Route>

          </Switch>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
