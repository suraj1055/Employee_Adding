import './App.css';
import { useState } from 'react';
import Axios from 'axios';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import Data from './Data';
import Input from './Input';
import DeptList from './DeptList';

function App() {

  const [Name, setName] = useState('')
  const [Department, setDepartment] = useState('')
  const [employeeList, setEmployeeList] = useState([]);

  

  const refreshPage = () => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setEmployeeList(response.data);
    });
  }

  const submitData = () => {
    Axios.post('http://localhost:3001/api/insert', { Name: Name, Department: Department })
  }

  return (
    <div className="container flex-2">

      <div className="header flex">
        <Input setName={setName} departmentList={DeptList} setDepartment={setDepartment} submitData={submitData} />
      </div>

      <div className="data-table flex">
        <div className="data-content">
          <Data employeeList={employeeList} />

          <div className="save-button">
                <ButtonComponent className="btn" onClick={refreshPage}> Refresh </ButtonComponent>
            </div>
        </div>
      </div>

    </div>
  );
}

export default App;
