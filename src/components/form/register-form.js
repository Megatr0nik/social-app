import { useState } from 'react';

import './form.css';


const RegisterForm = ({ onSubmit }) => {

    const [file, setFile] = useState({});
    const [newUser, setNewUser] = useState(
        {
            email: '',
            firstName: '',
            lastName: '',
            phoneNum: '',
            login: '',
            pass: '',
            avatar: '',
            friends: [],
            post: []
        }
    );

    const handleNewUser = (e) => {

        if (e.target.name === 'avatar') {
            setFile(e.target.files[0]);
            setNewUser({
                ...newUser,
                [e.target.name]: e.target.files[0]['name']
            });
        } else {
            setNewUser({
                ...newUser,
                [e.target.name]: e.target.value
            })
        }
    }

    const onRegister = () => {
        onSubmit(newUser, file);
    }

    return (
        <>
            <h3 className="login-title">Registration</h3>
            <div
                // action='http://localhost:8000/userdb/'
                // target='_self'
                // name='reg-form'
                className="form-container"
                // method='post'
                onSubmit={(e) => { console.log(e) }}>
                <label htmlFor="image_uploads" className='image-uploads'>Choose avatar</label>
                <input
                    style={{ display: 'none' }}
                    id="image_uploads"
                    name="avatar"
                    accept=".png, .jpg, .jpeg"
                    type="file"
                    onInput={handleNewUser}
                />
                First name:<input
                    className="login-input"
                    name='firstName'
                    type="text"
                    onChange={handleNewUser}
                    autoComplete='none'
                />
                Last Name:<input
                    className="login-input"
                    name='lastName'
                    type="text"
                    onChange={handleNewUser}
                    autoComplete='none'
                />
                Mail:<input
                    className="login-input"
                    name='email'
                    type="email"
                    onChange={handleNewUser}
                    autoComplete='none'
                />
                Password:<input
                    required
                    className="login-input"
                    name='pass'
                    type="password"
                    onChange={handleNewUser}
                    autoComplete='none'
                />
                Repeat password:<input
                    className="login-input"
                    name='pass2'
                    type="password"
                    onChange={handleNewUser}
                    autoComplete='none'
                />

                <button
                    // type='submit'
                    className='submit-button'
                    // name='reg-form'
                    onClick={onRegister}
                >
                    Ok
                </button>
            </div>
        </>
    );
}


export default RegisterForm;