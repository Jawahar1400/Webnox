import React, { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({ Email: "", password: "" });

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleClick = () => {
        if (input.Email.trim().length && input.password.trim().length) {
            if (input.Email === 'monika@gmail.com' && input.password === 'password') {
                navigate('/form');
            } else if (input.Email === 'admin@gmail.com' && input.password === 'admin@123') {
                navigate('/form');
            }
            else (alert("Login failed"))
        }
    };

    return (
        <div className="wrapper">
            <div className="login-box">
                <form action="">
                    <h2>Login</h2>

                    <div className="input-box">
                        <span className="icon"></span>
                        <input
                            type="email"
                            required
                            name="Email"
                            value={input.Email}
                            onChange={handleChange}
                        />
                        <label>Email</label>
                    </div>

                    <div className="input-box">
                        <span className="icon"></span>
                        <input
                            type="password"
                            required
                            value={input.password}
                            name="password"
                            onChange={handleChange}
                        />
                        <label>Password</label>
                    </div>

                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <Link to="/forgetpassword">Forget Password?</Link>
                    </div>

                    <button type="button" className="button" onClick={handleClick}>
                        Login
                        
                    </button>

                    <div className="register-link">
                        <p>
                            Don't have an account?{' '}
                            <Link className="linkOne" to="/SignUp">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
