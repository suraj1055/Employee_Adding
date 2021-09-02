import React, { useState } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import './App.css';
import Axios from 'axios';

const Register = () => {

    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    const Register = () => {
        Axios.post('http://localhost:3001/api/register', { Username: Username, Password : Password })
    }

    return (
        <div className="form-container flex">

            <div className="login-heading">
                <h2> Register </h2>
            </div>

            <div className="login flex">
                <input type="text" name="username" placeholder="Enter Username" onChange={(e) => { setUsername(e.target.value) }}/>
                <input type="text" name="password" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }}/>
            </div>

            <div className="save-button">
                <ButtonComponent className="btn" onClick={Register} > Register </ButtonComponent>
            </div>

        </div>
    )
}

export default Register
