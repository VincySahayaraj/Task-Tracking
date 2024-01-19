import React from 'react'
import useForm from "./submitAddUserForm";
import Navbar from '../Navbar/Navbar';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Register = ({ submitForm }) => {
    const navigate = useNavigate();
    const { handleChange, handleFormSubmit, values, errors } = useForm(submitForm);

    const signin = () => {

        navigate('/');

    }
    return (
        <>

            <div className="register-section">
                <div className="app-wrapper">
                    <div>
                        <h2 className="title" style={{ marginTop: '10px' }}>
                            Create User
                        </h2>
                    </div>
                    <form >
                        <div className="firstname">
                            <label > Name</label>
                            <input type="text"
                                id="create-account-firstname"
                                className="input"
                                name="firstname"
                                value={values.firstname}
                                onChange={handleChange}
                                placeholder="Name" />
                        </div>
                        {/* {errors.firstname && <p className="error">{errors.firstname}</p>} */}
                        <div className="lastname">
                            <label >User Name</label>
                            <input type="text"
                                id="create-account-lastname"
                                className="input"
                                name="lastname"
                                value={values.lastname}
                                onChange={handleChange}
                                placeholder="User Name" />
                        </div>
                        {/* {errors.lastname && <p className="error">{errors.lastname}</p>} */}
                        <div className="email">
                            <label >Email</label>
                            <input type="email"
                                id="create-account-email"
                                className="input"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                placeholder="Email" />
                        </div>
                        {errors.email && <p className="error">{errors.email}</p>}
                        <div className="role">
                            <label >Role</label>
                            <br />
                            <div >
                                <select type="text"
                                    name="role"
                                    className='input'
                                    value={values.role}
                                    onChange={handleChange}
                                    placeholder="Role"
                                    style={{ width: '400px', height: '40px' }} >
                                    <option value="0" style={{ color: 'black' }} className='input'>Choose Your Role</option>
                                    <option style={{ color: "black" }} value="Admin" className='input'>Admin</option>
                                    <option style={{ color: "black" }} value="User" className='input'>User</option>

                                </select>
                                </div>
                        </div>
                        {errors.role && <p className="error">{errors.role}</p>}
                        <div className="password">
                            <label >Password</label>
                            <input type="password"
                                id="create-account-password"
                                className="input"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                placeholder="password" />

                        </div>
                        {errors.password && <p className="error">{errors.password}</p>}
                        {/* <div className="cpassword">
                            <label >Confirm Password</label>
                            <input type="password"
                                id="create-account-cpassword"
                                className="input"
                                name="cpassword"
                                value={values.cpassword}
                                onChange={handleChange}
                                placeholder="Confirm password" />

                        </div>
                        {errors.cpassword && <p className="error">{errors.cpassword}</p>} */}
                        <button type="submit" className="submit" onClick={handleFormSubmit} >
                            Sign Up
                        </button>
                        <div className='signup-link'>
<p>Already have an Account?</p>
                        {/* <button type="btn" className="submit" onClick={signup} > */}
                            <span onClick={signin}>Sign In
                            </span>
</div>
                        <br />

                    </form>
                </div>
                <ToastContainer  position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
            </div>


        </>
    )
}


export default Register