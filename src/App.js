import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import Test from './Test';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BlogDetail from './BlogDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/test">
              <Test/>
            </Route>
            <Route path="/blog/:id">
              <BlogDetail/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
