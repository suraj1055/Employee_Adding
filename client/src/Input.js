import React from 'react'
import Select from 'react-select';
import './App.css';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function Input({ setName, departmentList, setDepartment, submitData }) {
    return (
        <div className="flex form-wrapper">
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
    )
}

export default Input;
