
import { useState } from 'react';

import './login.css';
import loginService from '../../services/loginService';
import registerService from '../../services/registerService';
import Main from '../main/Main';
import LoginForm from './login-form';
import RegisterForm from './register-form';



const Login = () => {

    // const [data, setData] = useState({
    //     login: '',
    //     pass: ''
    // });


    const [reg, setReg] = useState(false);
    const [acces, setAcess] = useState(false);
    const [userData, setUserData] = useState({});

    // const handleChange = (e) => {
    //     setData({
    //         ...data,
    //         [e.target.name]: e.target.value
    //     });
    // }

    const onReg = (e) => {
        setReg(e.target.checked)
    }

    const onSubmit = async (data) => {
        console.log(data)
        if (!reg) {
            const accesUserData = await loginService(data);
            console.log(accesUserData)
            // setAcess(accesUserData[0]);
            // setUserData(accesUserData[1]);
        } else {
            const newUserData = await registerService(data);
            console.log(newUserData)
            // setUserData(newUserData[0]);
            // setUserData(newUserData[1]);
        }
    }



    if (!acces) {
        return (
            <div className="login-container">
                {
                    reg ? <RegisterForm onSubmit={onSubmit} />
                        : <LoginForm handleChange={onSubmit} />
                }

                <label>
                    Registration
                    <input
                        className=''
                        name='reg'
                        type="checkbox"
                        onChange={onReg}
                    />
                </label>
            </div>
        );

    } else {
        return <Main props={userData} />
    }
}


export default Login;