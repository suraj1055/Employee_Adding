import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Data from './Data';
import Input from './Input';
import DeptList from './DeptList';
import { useState, useEffect } from 'react';
import Axios from 'axios';

const Navbar = ({ setName, departmentList, setDepartment, submitData, setEmployeeList, employeeList, Username, Password }) => {

    const [Heading, setHeading] = useState('');

    useEffect(() => {
        Axios.post('http://localhost:3001/api/login', { Username: Username, Password: Password }).then((response) => {
                setHeading(response.data[0].username)
        })
    })

    return (
        <>
            <Router>
                <div className="navbar-container flex-2">
                    <div className="nav-heading">
                        <h3> {Heading} </h3>
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
                            <Data setEmployeeList={setEmployeeList} employeeList={employeeList}/>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Navbar
