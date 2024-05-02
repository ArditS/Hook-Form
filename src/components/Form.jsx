import { useState } from "react";
import React from 'react';

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handeleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }



    return (
        <>
        <form>
            <div>
                <label>First Name</label>
                <input type="text" name="firstName"  placeholder='First Name' onChange={handleFirstName} value={firstName} />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="lastName"  placeholder='Last Name' onChange={handleLastName} value={lastName} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email"  placeholder='Email' onChange={handleEmail} value={email}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password"  placeholder='Password' onChange={handlePassword} value={password} />
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" placeholder='Confirm Password' onChange={handeleConfirmPassword} value={confirmPassword} />
            </div>
        </form>
        <div>
            <h1>Your Form Data</h1>
            <h2>First Name: {firstName}</h2>
            <h2>Last Name: {lastName}</h2>
            <h2>Email: {email}</h2>
            <h2>Password </h2>
            <h2>Confirm Password</h2>
        </div>
        </>
    );
}

export default Form;
