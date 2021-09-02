import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import './App.css';
import { useState } from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import Axios from 'axios';

const Login = () => {

    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [Error, setError] = useState('')


    const Login = () => {
        Axios.post('http://localhost:3001/api/login', { Username: Username, Password: Password }).then((response) => {

            if (response.data.message) {
                setError(response.data.message);
            }
            else {
                ReactDOM.render(
                    <App Username={Username} Password={Password} />,
                    document.getElementById('root')
                );
            }

        })
    }

    return (
        <div className="form-container flex">

            <div className="login-heading">
                <h2> Log In </h2>
            </div>

            <div className="login flex">
                <input type="text" name="username" placeholder="Enter Username" onChange={(e) => { setUsername(e.target.value) }} />
                <input type="text" name="password" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }} />
            </div>

            <div className="save-button">
                <ButtonComponent className="btn" onClick={Login}> Log In </ButtonComponent>
            </div>

            <div className="error-msg">
                <h4> {Error} </h4>
            </div>

        </div>
    )
}

export default Login;