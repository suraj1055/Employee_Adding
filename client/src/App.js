import './App.css';
import { useState, useEffect } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import Axios from 'axios';
import Select from 'react-select';
import Data from './Data';
import ReactDOM from 'react-dom';

function App() {

  const [Name, setName] = useState('')
  const [Department, setDepartment] = useState('')
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setEmployeeList(response.data);
    });
  }, []);

  const submitData = () => {
    Axios.post('http://localhost:3001/api/insert', { Name: Name, Department: Department })
    
  }

  const departmentList = [
    {
      value: 1, label: 'Developement'
    },
    {
      value: 2, label: 'Designing'
    },
    {
      value: 3, label: 'Deployment'
    },
    {
      value: 4, label: 'Testing'
    },
  ]

  return (
    <div className="container">

      <div className="header flex">
        <div className="Form-heading">
          <h3> EMPLOYEE DETAILS </h3>
        </div>

        <form>
          <div className="form-control">
            <input name="Name " className="Employee-Details" type="text" placeholder="Enter Employee Name" onChange={(e) => { setName(e.target.value) }} />
          </div>
        </form>

        <div className="form-control">

          <h5> Select Employee Department : </h5>

          <Select className="drop-down" options={departmentList} onChange={(e) => { setDepartment(e.label) }} />

        </div>

        <div className="save-button">
          <ButtonComponent className="btn" onClick={submitData}> Save </ButtonComponent>
        </div>

      </div>

      <div className="data-table flex">

        <div className="data-content">
          <Data employeeList={employeeList} />
        </div>

      </div>

    </div>
  );
}

export default App;
