import React from "react";

const Register = () => {

    return (
        <>
        <h1>fiewie</h1>
         <div className="form-container">
            <h1>Hello!</h1>
            <p>It seems you don't have an ecommerce account.</p>
            <p>Let's create a new one for you!</p>
            <form method="post">
                <input type="text" placeholder="Enter your name" name="name" />
                <input
                    type="text"
                    placeholder="Enter your email address"
                    name="email"
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                />
                <input
                    type="password"
                    placeholder="Confirm your password"
                    name="confirm-password"
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

