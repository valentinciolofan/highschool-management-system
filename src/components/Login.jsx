import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        const data = { email, password };
        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            } else {
                response.json().then(res => {
                    // Assuming the response includes a redirect route
                    // navigate(res.redirect);
                    navigate('/dashboard'); // Navigate to dashboard after login
                });
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <h1>Login page</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <div>
                        <label>
                            <input type="checkbox" name="remember" />
                            Remember me
                        </label>
                        {/* Consider adding a forgot password link here */}
                    </div>
                    <input type="submit" value="Login" />
                    <p>Don't have an account?
                        <button type="button" onClick={handleRegisterClick}>
                            <b>Register</b>
                        </button>
                    </p>
                </form>
            </div>
        </>
    );
};

export default Login;
