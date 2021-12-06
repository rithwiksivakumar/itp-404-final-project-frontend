import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Cars from "./components/Cars";
import Motorcycles from "./components/Motorcycles";
import "./App.css";
import VehiclePage from "./components/VehiclePage";
import UpdateCar from "./components/UpdateCar";
import UpdateMotorcycle from "./components/UpdateMotorcycle";
import AddCar from "./components/AddCar";
import AddMotorcycle from "./components/AddMotorcycle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/cars/add" component={AddCar} />
            <Route exact path="/motorcycles/add" component={AddMotorcycle} />
            <Route
              exact
              path="/motorcycles/:id/update"
              component={UpdateMotorcycle}
            />
            <Route exact path="/cars/:id/update" component={UpdateCar} />
            <Route exact path="/:auto/:id" component={VehiclePage} />
            <Route exact path="/cars" component={Cars} />
            <Route exact path="/motorcycles" component={Motorcycles} />
            <Route exact path="/" component={Home} />
            <Route path="/" component={NotFound} />
          </Switch>
          <ToastContainer />
        </Router>
      </div>
    );
  }
}

export default App;
