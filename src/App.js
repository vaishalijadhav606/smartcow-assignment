import './App.css';
import Test1 from './components/Test1';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Test2 from './components/Test2';

function App() {
  return (
    <Router>

      <Switch>
          <Route path="/test2">
            <Test2 />
          </Route>
          <Route path="/">
            <Test1 />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
