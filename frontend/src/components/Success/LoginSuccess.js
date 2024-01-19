import React from 'react'
import logout from '../logout';
import { Button } from 'react-bootstrap'

const LoginSuccess = () => {

    var storing = localStorage.getItem('currentUser');
    var currentuser = JSON.parse(storing)

    return (
        <div className="container">
            <div className="app-wrapper">

                <h1 className="form-success mt-5">Hello {currentuser.user.firstname}  !You have Successfully Logged In!</h1>
                <br />
                <br />
                <p className='input'>Click Here To Logout</p>
                <Button className='submit' onClick={() => {logout()}}>Logout</Button>

            </div>
        </div>
    )
}


export default LoginSuccess