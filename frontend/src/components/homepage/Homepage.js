import React from 'react'
import { useNavigate } from 'react-router-dom'
const Homepage = () => {
    const navigate = useNavigate()
    const signin = () => {
        navigate("/login")
    }
    const signup = () => {
       navigate("/register")
    }
    return (


        <div className="container">
            <div className="app-wrapper">
                <h1 className="form-success mt-5">Welcome to Homepage</h1>
                <br />
                <br />
                <ul>
                    <br />
                    <p className='input'>Already Have an Account!Sign In Here...</p>
                    <button className='submit' onClick={signin}>Sign In</button>
                    <br />
                    <br />
                    <p className='input'>New User!Sign Up Here...</p>
                    <button className='submit' onClick={signup}>Sign Up</button>

                </ul>
            </div>
        </div>

    )
}

export default Homepage