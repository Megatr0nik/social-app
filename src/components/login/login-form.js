

import { useState } from 'react';
import './login.css';

const LoginForm = ({ onSubmit }) => {

    const [data, setData] = useState({});

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const onLogin = () => {
        onSubmit(data);
    }


    return (

        <>
            <h3 className="login-title">Login</h3>
            <form
                action=''
                target='_self'
                className="form-container"
                method='post'
                onSubmit={(e) => { console.log(e) }}>
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
                    className='submit-button'
                    onClick={onLogin}
                >
                    Ok
                </button>
            </form>
        </>

    );

}

export default LoginForm;