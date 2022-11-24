import React from 'react'

const RegisterSuccess = () => {
    return (
        <div className="container">
            <div className="app-wrapper">
                <h1 className="form-success mt-5">Hii User! Successfully Registered</h1>
                <br />
                <br />
                <div className='input'>Click Here To Sign In </div>
                <a className='input' href="/login">Sign In</a>
            </div>
        </div>
    )
}
export default RegisterSuccess