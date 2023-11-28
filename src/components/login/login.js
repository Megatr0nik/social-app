
import { useState } from 'react';


import './login.css';
import loginService from '../services/loginService';
// import registerService from '../services/registerService';
import Main from '../main/Main';



const Login = () => {

    const [data, setData] = useState({
        login: '',
        pass: '',
        reg: false
    });

    const [acces, setAcess] = useState(0);
    const [userData, setUserData] = useState({});

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = async () => {
        const accesUserData = await loginService(data);
        // console.log(accesUserData)
        setAcess(accesUserData[0]);
        setUserData(accesUserData[1]);
    }


    if (!acces) {
        return (
            <div className="login-container">
                <h3 className="login-title">Login</h3>
                <form
                    action=''
                    target='_self'
                    className="form-container"
                    method='post'
                    onSubmit={(e) => { console.log(e) }}>
                    Login:<input
                        className="login-input"
                        name='login'
                        type="text"
                        // defaultValue=''
                        onChange={handleChange}
                        autoComplete='none'
                    /><br></br>
                    Password:<input
                        className="login-input"
                        name='pass'
                        type="password"
                        // defaultValue=''
                        onChange={handleChange}
                        autoComplete='none'
                    />
                    <label>
                        Registration
                        <input
                            className=''
                            name='reg'
                            type="checkbox"
                            // checked={reg}
                            onChange={handleChange}
                        />
                    </label>

                </form>
                <button
                    className='submit-button'
                    onClick={onSubmit}
                >
                    Ok
                </button>
            </div>
        );

    } else {
        return <Main props={userData} />
    }
}


export default Login;