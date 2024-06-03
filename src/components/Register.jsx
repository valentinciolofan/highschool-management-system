import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [cnp, setCnp] = useState('');

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastName = (event) => {
        setLastName(event.target.value);
    } 

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleAddress = (event) => {
        setAddress(event.target.value);
    }

    const handleCnp = (event) => {
        setCnp(event.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {email, password, firstName, lastName, cnp, address}
        console.log(data);
        async function registerSubmit(data) {
            try {
                const response = await fetch('http://localhost:3000/register', {
                    method: "POST",
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const message = await response.text();
                console.log(message);
            } catch (error) {
                console.error("Error:", error);
            }
        }
        registerSubmit(data);
    }

    return (
        <>
         <div className="form-container">
            <h1>Hello!</h1>
            <p>It seems you don't have an account.</p>
            <p>Let's create a new one for you!</p>
            <form method="post" onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Enter your first name"
                name="firstName" 
                onChange={handleFirstName}
                />
                <input 
                type="text" 
                placeholder="Enter your last name"
                name="lastName" 
                onChange={handleLastName}
                />
                <input
                    type="text"
                    placeholder="Enter your email address"
                    name="email"
                    onChange={handleEmail}
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    onChange={handlePassword}
                />
                 <input
                    type="password"
                    placeholder="Confirm your password"
                    name="confirm-password"
                />
                <input 
                type="text" 
                placeholder="Enter your adress"
                name="address" 
                onChange={handleAddress}
                />
                <input 
                type="text" 
                placeholder="Enter your CNP"
                name="cnp" 
                onChange={handleCnp}
                />
               
                <span>
                    <input
                        type="checkbox"
                        id="termsandconditions"
                        name="termsandconditions"
                        value="Terms and conditions"
                    />
                    <label htmlFor="termsandconditions"
                        ><a href="terms">I agree with terms and conditions</a></label>
                </span>
                <input type="submit" value="Register" />
            </form>
        </div>
        </>
    );
}

export default Register;

