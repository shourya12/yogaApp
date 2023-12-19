import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import  {useNavigate } from 'react-router-dom'

function SignIn() {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const [signInData, setSignInData] = useState({
    email: '',
    password:''
  });

  const handleChange = (event, property) => {
    setSignInData({ ...signInData, [property]: event.target.value });
  };

  const goSignup = ()=>{
    navigate('/register')
  }

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      // Make an HTTP POST request using Axios to validate user credentials
      const response = await axios.post('http://localhost:8080/api/signin', signInData);

      // Check if the server response indicates successful sign-in
      if (response.data) {
        // Navigate to the payment page on successful sign-in
        navigate('/yoga');
      } else {
        // Display error message if sign-in fails


        setError("User with given username is not exist or password is incorrect");
      }
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  };
  return (
    <div>

        <div>
            <h2>Sign In</h2>
        </div>
        <div>
            <form onSubmit={submitForm}>
                {/* email */}
                <div style={{marginBottom:"20px"}}>
                    <label style={{marginRight:"10px"}} htmlFor="email" className="form-label">
                    Email
                    </label>
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter here"
                    onChange={(e) => handleChange(e, 'email')}
                    value={signInData.email}
                    />
                </div>

                {/* password */}
                <div style={{marginBottom:"20px"}} className="mb-3">
                    <label style={{marginRight:"10px"}} htmlFor="email" className="form-label">
                    Password
                    </label>
                    <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter here"
                    onChange={(e) => handleChange(e, 'password')}
                    value={signInData.password}
                    />
                </div>

                 {/* Display error message if sign-in fails */}
                {error && <div style={{ color: 'red' }}>{error}</div>}


                <div>
                <button style={{marginRight:"10px"}} type="submit" onClick={submitForm}>
                      Sign in
                </button>
                <button  type="click" onClick={goSignup}>
                    New User
                </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignIn