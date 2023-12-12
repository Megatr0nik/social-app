
import { useState } from 'react';

import './login.css';
import loginService from '../../services/loginService';
import registerService from '../../services/registerService';
import Main from '../main/Main';
import LoginForm from './login-form';
import RegisterForm from './register-form';



const Login = () => {

    const [reg, setReg] = useState(false);
    const [acces, setAcess] = useState(false);
    const [userData, setUserData] = useState({});
    const [wrong, setWrong] = useState({ warning: false, data: '' });



    const onReg = (e) => {
        setReg(e.target.checked)
    }

    const onWarning = (warnStr) => {
        setWrong({ warning: true, data: warnStr });
        setTimeout(() => setWrong({ warning: false, data: '' }), 5000);
    }

    const onSubmit = (data) => {

        if (reg === false) {

            loginService([reg, data])
                .then(d => {

                    if (typeof d[1] === 'string') {

                        setReg(d[0]);
                        setAcess(d[0]);
                        onWarning(d[1]);
                    } else {
                        setAcess(!d[0]);
                        setUserData(d[1]);
                    }
                }).catch(err => console.log(err));
        } else {
            registerService([reg, data])
                .then(d => {
                    if (typeof d[1] === 'string') {
                        onWarning(d[1]);
                    } else {
                        setReg(!d[0]);
                        setAcess(d[0]);
                        setUserData(d[1]);
                    }

                })
                .catch(err => console.log(err));
        }
    }

    if (!acces) {
        return (
            <>
                {<h3 className='warning-info'
                    style={wrong.warning ? { display: 'flex' } : { display: 'none' }}
                >
                    {wrong.data}
                </h3>}
                <div className="login-container">
                    {
                        reg ? <RegisterForm onSubmit={onSubmit} />
                            : <LoginForm onSubmit={onSubmit} />
                    }
                    <label>
                        Registration
                        <input
                            className=''
                            name='reg'
                            type="checkbox"
                            checked={reg}
                            onChange={onReg}
                        />
                    </label>
                </div>
            </>

        );

    } else {
        return <Main props={userData} />
    }
}


export default Login;