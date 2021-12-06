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

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/cars/add" component={AddCar} />
            <Route path="/motorcycles/add" component={AddMotorcycle} />
            <Route
              path="/motorcycles/:id/update"
              component={UpdateMotorcycle}
            />
            <Route path="/cars/:id/update" component={UpdateCar} />
            <Route path="/:auto/:id" component={VehiclePage} />
            <Route path="/cars" component={Cars} />
            <Route path="/motorcycles" component={Motorcycles} />
            <Route path="/" component={Home} />
          </Switch>
          <ToastContainer />
        </Router>
      </div>
    );
  }
}

export default App;
