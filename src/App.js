import './App.css';
import Home from './layout/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
				<Switch>
          <Route exact path="/" component={Home} />
				</Switch>
			</Router>
    </div>
  );
}

export default App;
