import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AddProduct from './Components/AddProduct/AddProduct';
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
import Admin from './Components/Admin/Admin/Admin';
// import AddProduct from './Components/Admin/AddProduct/AddProduct';
import AddProduct from "./Components/AddProduct/AddProduct"
import { useState } from 'react';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import { createContext } from 'react';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import EditProduct from './Components/EditProduct/EditProduct';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addProduct">
           <AddProduct/>
          </Route>
          <PrivetRoute path="/orders">
            <Orders />
          </PrivetRoute>
          <PrivetRoute path="/admin">
            <Admin/>
          </PrivetRoute>
          <PrivetRoute path="/manageProduct">
            <ManageProduct/>
          </PrivetRoute>
          <PrivetRoute path="/editProduct">
            <EditProduct/>
          </PrivetRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  )
  
  }

export default App;
