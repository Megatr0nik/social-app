

import './login.css';

const LoginForm = ({ handleChange }) => {


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
                    name='login'
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
            </form>
        </>

    );

}

export default LoginForm;