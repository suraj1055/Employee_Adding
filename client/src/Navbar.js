import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Data from './Data';
import Input from './Input';
import DeptList from './DeptList';
import { useEffect } from 'react';
import Axios from 'axios';

const Navbar = ({ setName, departmentList, setDepartment, submitData, setEmployeeList, employeeList }) => {

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            setEmployeeList(response.data);
        });
    })

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
                                <Link to="/add"> Add Employee </Link>
                            </li>
                            <li>
                                <Link to="/data"> All Employees </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <Switch>
                    <Route path="/add">
                        <div className="input-component">
                            <Input setName={setName} departmentList={DeptList} setDepartment={setDepartment} submitData={submitData} />
                        </div>
                    </Route>
                    <Route path="/data">
                        <div className="data-component">
                            <Data employeeList={employeeList} />
                        </div>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Navbar
