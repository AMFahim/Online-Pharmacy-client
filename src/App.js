import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './Components/AddProduct/AddProduct';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NoMatch from './Components/NoMatch/NoMatch';
import Orders from './Components/Orders/Orders';
import Admin from './Components/Admin/Admin';

function App() {
  return (
    <div>
      <Router>
        {/* <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AddProduct">Add Product</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" href="#"><h3>Online Hat</h3></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                <Link to="/orders" className="nav-link" href="#">Orders</Link>
                <Link to="/admin" className="nav-link" href="#">Admin</Link>
                <Link to="/login" className="nav-link" href="#"><button className="btn btn-primary">Login</button></Link>
              </div>
            </div>
          </div>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/AddProduct">
            <AddProduct/>
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>


      {/* <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/AddProduct">
             <AddProduct/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
