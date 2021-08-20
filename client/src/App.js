import './App.css';
import { useState } from 'react';
import Axios from 'axios';
import DeptList from './DeptList';
import Navbar from './Navbar';

function App() {

  const [Name, setName] = useState('')
  const [Department, setDepartment] = useState('')
  const [employeeList, setEmployeeList] = useState([]);

  const submitData = () => {
    Axios.post('http://localhost:3001/api/insert', { Name: Name, Department: Department })
  }

  return (
        <Navbar setName={setName} departmentList={DeptList} setDepartment={setDepartment} submitData={submitData} employeeList={employeeList} setEmployeeList={setEmployeeList}/>
  );
}

export default App;