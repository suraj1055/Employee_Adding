import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import './App.css';
import { useState  } from 'react';
import App from './App';
import ReactDOM from 'react-dom';

const Login = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const Login =() => {
        if (username === 'admin' && password === 'admin') {
            ReactDOM.render(
                <App />,
              document.getElementById('root')
            )
        }
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

        </div>
    )
}

export default Login;