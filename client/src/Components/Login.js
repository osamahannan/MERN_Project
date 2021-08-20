import React, {useState} from 'react'
import loginpic from '../assets/login.svg';
import { Link } from 'react-router-dom';

const Login = () => {

    const  [email, setEmail] = useState('');
    const  [password, setPassword] = useState('');

    return (
        <div className="register">

            <div className="signin-image">
                <figure>
                    <img src={loginpic} alt="signin-pic" className="logimage" />
                </figure>
                <div className= "next-link">
                    <div>Create an account ?</div>
                    <Link to="/signup" className="signup-link">Sign Up</Link>
                </div>
            </div>

            <div className="register-container">
                <h1>Log In</h1>

                <form className="register-form" id="register-form">
                    <div className="form-group">
                        <label htmlFor="name">
                            <i className="zmdi zmdi-email"></i>
                        </label>
                        <input type="email" name="email" id="email" autoComplete="off" 
                        value= {email}
                        onChange= {(e) => setEmail(e.target.value)}
                        placeholder="Your Email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">
                            <i className="zmdi zmdi-lock"></i>
                        </label>
                        <input type="password" name="password" id="password" autoComplete="off" 
                        value= {password}
                        onChange= {(e) => setPassword(e.target.value)}
                        placeholder="Your Password" />
                    </div>

                </form>

                <div className="button">
                    <button type="submit" name="signin" id="signin" className="btn" value="register">Log In</button>
                </div>

            </div>

        </div>
    )
}

export default Login
