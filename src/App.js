import { Route, Switch } from "react-router-dom";
import "./App.css";
import Customer from "./components/customers";
import CustomerProfile from "./components/profile";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Customer} />
        <Route path="/profile" exact component={CustomerProfile} />
      </Switch>
    </div>
  );
}

export default App;
