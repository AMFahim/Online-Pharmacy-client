import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import pharmacy from '../../images/pharmacy.png'

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="bg-primary">
      <nav className="navbar navbar-expand-lg navbar-light container">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand  text-light" href="#"><img style={{height:"50px"}} src={pharmacy} alt="" /><h3>Online Pharmacy</h3></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/" className="nav-link active text-light" aria-current="page" href="#">Home</Link>
                <Link to="/orders" className="nav-link text-light" href="#">Orders</Link>
                <Link to="/admin" className="nav-link text-light" href="#">Admin</Link>
                <Link to={`/login`} className="nav-link text-light" href="#">
                  {
                    loggedInUser.email ? loggedInUser.name : <button className="btn btn-outline-warning">Login</button>
                  }
                  </Link>
              </div>
            </div>
          </div>
        </nav>
    </div>
  );
};

export default Header;