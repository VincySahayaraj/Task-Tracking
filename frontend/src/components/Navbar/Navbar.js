

import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './navbar.css';
import Avatar from 'react-avatar';

const Navbarheader = () => {

    const [open,setOpen]=useState(false);
    const [showProfile,setShowProfile]=useState(false);
    const currentUser=JSON.parse(localStorage.getItem('currentUser'))
    const userName=currentUser.user.firstname;




   
    const logout = () => {
        localStorage.removeItem('currentUser');
        window.location.href = "/";
    }

    const closeSidebar=()=>{
      setOpen(true)
    }

    return (
        <>

            <Navbar className='navbar-section' variant="dark">
                    <Navbar.Brand href="#home" className='tasktracking-heading'>Task Tracking</Navbar.Brand>
                    {/* <div onClick={closeSidebar}>Menu</div> */}
                    <Nav className="me-auto">
                    </Nav>
                    {/* <Avatar size="50" facebook-id="invalidfacebookusername" src={avatarSrc} round={true} 
                   /> */}
                    <Avatar className='avatar-icon' size="50" round={true}  onClick={()=>setShowProfile(!showProfile)}/>
                    <div className='current-username'><span>{userName}</span></div>
                   <div  className={showProfile ? 'logout-dropdown' : 'hide-profile'}>
                   <div  onClick={() => { logout() }} className={showProfile ? 'show-profile logout-nav' : 'hide-profile'}>Logout</div>
                   </div> 
            </Navbar>
        </>
    )
}

export default Navbarheader