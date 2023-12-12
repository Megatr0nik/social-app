
import { useState } from 'react';


import Main from './main-page';
import LoginForm from '../components/form/login-form';
import RegisterForm from '../components/form/register-form';
import { postService } from '../services/post-request';

import './authorization-page.css';

export const AuthorizationPage = () => {

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
            postService(data, '/login')
                .then(d => {
                    if (typeof d === 'string') {
                        onWarning(d);
                    } else {
                        setAcess(!acces);
                        setUserData(d);
                    }
                }).catch(err => console.log(err));
        } else {
            postService(data, '/register')
                .then(d => {
                    if (typeof d === 'string') {
                        onWarning(d);
                    } else {
                        setReg(!reg);
                        setAcess(true);
                        setUserData(d);
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
