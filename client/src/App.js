import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

import Data from './Data';
import Input from './Input';

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
        <Input setName={setName} departmentList={departmentList} setDepartment={setDepartment} submitData={submitData}/>
      </div>

      <div className="data-table flex">

        <div className="data-content">
         <Data employeeList={employeeList}/>
        </div>

      </div>

    </div>
  );
}

export default App;
