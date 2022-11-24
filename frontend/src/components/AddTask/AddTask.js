import React, { useState } from 'react'
import useForm from "../AddUser/submitAddUserForm";
import Navbar from '../Navbar/Navbar';
import { useNavigate } from "react-router-dom"
import axios from "axios";

const UserForm = ({ submitForm }) => {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hhh", inputs)
        axios.post("http://localhost:8000/dailytask", inputs)
            .then(res => {

                alert(res.data.message)
                console.log(res.data)
                //localStorage.setItem('currentUser', JSON.stringify(res.data))
                navigate('/admin')

            })
    }

    return (
        <>

            <div className="container register-section">
                <div className="app-wrapper">
                    <div>
                        <h2 className="title" style={{ marginTop: '10px' }}>
                            Daily Task
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <label>Enter your name:
                            <input
                                type="text"
                                name="username"
                                id="create-account-firstname"
                                className="input"
                                value={inputs.username || ""}
                                onChange={handleChange}
                            />
                        </label>
                        <br />
                        <label>Enter your daily task:
                            <input
                                type="text"
                                name="dailytask"
                                id="create-account-firstname"
                                className="input"
                                value={inputs.dailytask || ""}
                                onChange={handleChange}
                            />
                        </label>
                        <br />
                        <label>Enter Estimated time:
                            {/* <input
                                type="number"
                                name="time"
                                className="input"
                                value={inputs.time || ""}
                                onChange={handleChange}
                            /> */}

                            <input type="datetime-local"  name="estimatedtime" value={inputs.estimatedtime} onChange={handleChange}/>
                        </label>
                        <br />
                        <button type="submit" className="submit"  >
                            Add Task
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default UserForm