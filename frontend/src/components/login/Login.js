import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
// Importing toastify module

import { toast, ToastContainer } from 'react-toastify';

 
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
 
// toast-configuration method,
// it is compulsory method.


const Login = ({ setLoginUser }) => {
    
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,//spread operator 
            [name]: value
        })
    }

    const signup = () => {

        navigate('/register');

    }

    const login = (event) => {
        event.preventDefault();
        // navigate('/admin')
        axios.post("http://localhost:8000/Login", user)
            .then(res => {
              
                setLoginUser(res.data.user)
                localStorage.setItem('currentUser', JSON.stringify(res.data))
                localStorage.setItem('token', JSON.stringify(res.data.token))
                if(res.data.token){

                    if(res.data.user.role=== 'Admin'){
                        navigate('/admin')
                    }
                    else{
                        navigate("/user")
                    }
                }
                else{
                  
                    toast.error(res.data.message)
                    // toast.error("Authentication failed", { autoClose: 10000 });
                    // toast.warning("Danger", { autoClose: 10000 });
                    // toast("Hello Geeks");
                }
                // navigate('/admin')
                // if (res.data.user.role === 'Admin') {
                //     //localStorage.setItem('currentUser', JSON.stringify(res.data))
                //     navigate('/admin')

                // }
                // else {
                //     //localStorage.setItem('currentUser', JSON.stringify(res.data))
                //     navigate("/user")
                // }
            }
        )
    }

    // useEffect(() => {

    //     let userExist = localStorage.getItem('currentUser');
    //     if (userExist) {
    //         navigate("/LoginSuccess")

    //     }
    // }, [])
    return (


        <>

            <div className=" login-section">
                <div className="app-wrapper">
                    <div>
                        <h2 className="title">
                            Login To Your Account
                        </h2>
                    </div>
                    <form  >
                        <div className="email">
                            <label >Email</label>

                            <input type="email"
                                className="input"
                                id="sign-in-email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                placeholder="Your email" />
                        </div>

                        <div className="password">
                            <label >Password</label>

                            <input type="password"
                                className="input"
                                id="sign-in-password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                placeholder="Your password" />

                        </div>
                        <button type="btn" className="submit" onClick={login}>
                            Sign In
                        </button>
<div className='signup-link'>
<p>Don't have an Account?</p>
                        {/* <button type="btn" className="submit" onClick={signup} > */}
                            <span onClick={signup}>Sign Up
                            </span>
</div>
                       
                        {/* </button> */}
                        <ToastContainer  position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login