
import { useState } from 'react';
import './login.css';

const LoginForm = ({ onSubmit }) => {

    const [data, setData] = useState({
        email: '',
        pass: ''
    });

    const onLogin = () => {
        onSubmit(data);
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <h3 className="login-title">Login</h3>
            <div
                // action=''
                // target='_self'
                className="form-container"
            // method='post'
            // onSubmit={(e) => { console.log(e) }}
            >
                Login:<input
                    className="login-input"
                    name='email'
                    type="text"
                    onChange={handleChange}
                    autoComplete='none'
                /><br></br>
                Password:<input
                    className="login-input"
                    name='pass'
                    type="password"
                    onChange={handleChange}
                    autoComplete='none'
                />
                <button
                    // type='submit'
                    className='submit-button'
                    // name='reg-form'
                    onClick={onLogin}
                >
                    Ok
                </button>
            </div>
        </>

    );

}

export default LoginForm;