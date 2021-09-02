import './App.css';
import { useEffect } from 'react';
import Axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';

const Data = ({ setEmployeeList, employeeList }) => {

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            setEmployeeList(response.data);
        });
    })

    const renderEmployee = (employee, index) => {
        return(
            <tr key={index}>
                <td>{employee.Name}</td>
                <td>{employee.Department}</td>
            </tr>
        )
    }

    return (
        <div className="data-wrapper">
            <div className="data-heading">
                <h2> LIST OF EMPLOYEE'S </h2>
            </div>

            <ReactBootStrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Department </th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map(renderEmployee)}
                </tbody>
            </ReactBootStrap.Table>

        </div>
    )
}

export default Data;
