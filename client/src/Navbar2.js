import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';

const Navbar2 = () => {
    return (
        <>
            <Router>
                <div className="navbar-container flex-2">
                    <div className="nav-heading">
                        <h3>Employee's Portal</h3>
                    </div>

                    <div className="nav-items">
                        <ul class="nav-list">
                            <li>
                                <Link to="/register"> Register </Link>
                            </li>
                            <li>
                                <Link to="/login"> Log In </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <Switch>
                    <Route path="/register">
                        <div className="register-component">
                            <Register/>
                        </div>
                    </Route>
                    <Route path="/login">
                        <div className="login-component">
                            <Login/>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Navbar2
