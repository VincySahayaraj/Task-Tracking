import React,{useState} from 'react'
import Register from "./register/Register"
import RegisterSuccess from "./Success/RegisterSuccess"

const Form=()=>{
    const [formIsSubmitted,setFormIsSubmitted]=useState(false);
    const submitForm=()=>{
        setFormIsSubmitted(true);
    };
  return(
    <div>
        {!formIsSubmitted?<Register  submitForm={submitForm}/>:<RegisterSuccess/>}
    </div>
  )
}
export default Form