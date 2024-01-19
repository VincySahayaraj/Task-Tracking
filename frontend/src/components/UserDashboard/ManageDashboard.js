import React, { useEffect,useState } from 'react';
import { Card,Button } from 'react-bootstrap';
import axios from 'axios';
import './dashboard.css'

const ManageDashboard = () => {

    const currentUser=JSON.parse(localStorage.getItem("currentUser"))
    const user=currentUser.user;
    const userId=user._id

    const [tasks,setTasks]=useState([]);

    useEffect(()=>{
       getTasksById(userId);
    },[tasks.length])

    const getTasksById=(id)=>{
        axios.get(`http://localhost:8000/tasks/${id}`).then(res => {
        if (res.data.success) {
            const currenttasks=res.data.tasks
            setTasks(currenttasks);
          }
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
    }


  return (
    <div>
      <div className='row card-section'>
        <div className='col-lg-2 col-xl-2 col-md-2 col-xs-10 col-sm-10 card-dashboard1'>
        <Card  className='card-text'>
         Total Tasks<span>{tasks.length}</span>
        </Card>
        </div>
        <div className='col-lg-2 col-xl-2 col-md-2 col-xs-10 col-sm-10 card-dashboard2'>
        <Card  className='card-text'>
         Projects Assigned
        </Card>
        </div>
        <div className='col-lg-2 col-xl-2 col-md-2 col-xs-10 col-sm-10 card-dashboard3'>
        <Card  className='card-text'>
        Open Tasks
        </Card>
        </div>
        <div className='col-lg-2 col-xl-2 col-md-2 col-xs-10 col-sm-10 card-dashboard4'>
        <Card  className='card-text'>
        Inprogress Tasks
        </Card>
        </div>
      </div>
    </div>
  )
}

export default ManageDashboard
