import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import './dashboard.css';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { RiEdit2Line } from 'react-icons/ri';
import axios from 'axios';
import { Card,Button,Table } from 'react-bootstrap';
import { faXmark } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import ManageProjects from './ManageProjects.js';
import { useNavigate } from 'react-router-dom';



const Dashboard = () => {

  //  const[showproject,setShowproject]=useState();
  var projshow = false;

  const navigate=useNavigate();

  const [showproject, setShowproject] = useState(false);
  const [showprojdetails, setShowprojdetails] = useState(false);
  const [userId, setUserId] = useState();
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState();
  const [projects, setProjects] = useState();
  const [projectcount, setProjectcount] = useState();
  const [projectshow,setProjectshow]=useState();
  const [newTasks,setNewTasks]=useState([]);
  const [pendingTasks,setPendingTasks]=useState([]);
  const [showManageProjects, setShowManageProjects] = useState(false);
  // const [userdetails,setUserdetails]=useState();

  const showUsers = () => {

    const updatedValue = !showprojdetails;
    setShowprojdetails(updatedValue);
    // setShowManageProjects(!showManageProjects);
    // console.log("show user details",showprojdetails);
  }

  const getProjects = () => {
    axios.get('http://localhost:8000/projects').then(res => {

      if (res.data.success) {
        setProjectcount(res.data.projects);
        console.log("project count",projectcount,res.data.projects);
        //this.state.users.sort();
        // window.processData("mydata");l
      }
    });
  }

  const getProjectsforusers = (id) => {
    axios.get(`http://localhost:8000/users/projects/${id}`).then(res => {
      // alert(id);
      if (res.data.success) {
        setProjects(res.data.projects);
      }
    });
  }



  //get All Users
  const getUsers = () => {
    axios.get('http://localhost:8000/users').then(res => {
      if (res.data.success) {
        setUsers(res.data.users)
      }
    });
  }

  const getProjectsByUser=(id)=>{
    setUserId(id);
    setProjectshow(true);
    getProjectsforusers(id);
  }
 
  const gotoProject=()=>{
    setShowManageProjects(!showManageProjects);
  }

  //get users 
  useEffect(() => {
    getUsers();
    getProjects();
    getTasks(); 

  }, [])

  //get All tasks
  const getTasks=()=> {
  
    axios.get('http://localhost:8000/tasks').then(res => {
     
      if (res.data.success) {
          const currenttasks=res.data.tasks
          const filteredTasks = currenttasks.filter(task => task.status !== 3);
          const openTasks=currenttasks.filter(task=>task.status==0);
          const inprogressTasks=currenttasks.filter(task=>task.status==1);
          setNewTasks(openTasks);
          setPendingTasks(inprogressTasks);
          setTasks(filteredTasks);
    }
  })
    .catch(error => {
      console.error('Error fetching tasks:', error);
    });
      }
   
  return (
    <>




      <section>
        <div className='row task-home'>
        <div className='col-lg-2 col-xl-2 col-md-2 col-xs-10 col-sm-10 card-dashboard1'>
        <Card  className='card-text' onClick={showUsers}>
        Total Users<span>{users? users.length:<>0</>}</span>
        </Card>
        </div>
        <div className='col-lg-2 col-xl-2 col-md-2 col-xs-10 col-sm-10 card-dashboard2'>
        <Card  className='card-text' >
        Total Projects<span>{projectcount? projectcount.length:<>0
        </>}</span>
        </Card>
        </div>
        <div className='col-lg-2 col-xl-2 col-md-2 col-xs-10 col-sm-10 card-dashboard3'>
        <Card  className='card-text'>
        Total Tasks<span>{tasks? tasks.length:<>0</>}</span>
        </Card>
        </div>
        <div className='col-lg-2 col-xl-2 col-md-2 col-xs-10 col-sm-10 card-dashboard4'>
        <Card  className='card-text'>
        Open Tasks<span>{newTasks? newTasks.length:<>0</>}</span>
        </Card>
        </div>
        <div className='col-lg-2 col-xl-2 col-md-2 col-xs-10 col-sm-10 card-dashboard5'>
        <Card  className='card-text'>
        Inprogress Tasks<span>{pendingTasks? pendingTasks.length:<>0
        </>}</span>
        </Card>
        </div>
          {showprojdetails && (
            <div className='row proj-box' >
              {
                users != undefined ? (
                  users.map(users =>
                    <div className='col-2 pending-box'>
                      <div className='user-project1'  >
                        <p onClick={()=>getProjectsByUser(users._id)}>{users.firstname}</p>
                      </div>
                    </div>
                  )
                ) : (
                <>
                No data
                </>
                )}
                </div>
          )}
          {
            projects && projectshow &&(
              <>
              <div className="project-card">
              <Card  className='proj-modal'>
                    {/* <p>Projects:<span>{project.projectname}</span></p> */}
                    <table>
                      <th>
                        Project Name
                      </th>
                      <th>
                        Open 
                      </th>
                      <th>
                        InProgress 
                      </th>
                      {
                         projects.map(project=>
                        <tr className='project-name'>{project.projectname}</tr>
                         )}
                    </table>
             <IoMdClose className="close-icon" onClick={()=>setProjectshow(!projectshow)}/>
              </Card>
              </div>
              </>
            )
          }


              {/* <div className='col-2'>
                <div className='user-project1' onClick={() => setShowprojdetails(!showprojdetails)}>
                  <h4>Koovs</h4>
                  <p>Pending:</p>
                  <p>Inprogress:</p>
                  <p>Completed:</p>
                </div>
              </div>
              <div className='col-2'>
                <div className='user-project1'>
                  <div>
                    <h4>Koovs</h4>
                    <p>Pending:</p>
                    <p>Inprogress:</p>
                    <p>Completed:</p>
                  </div>
                </div>
              </div>
              <div className='col-2'>
                <div className='user-project1'>
                  <div>
                    <h4>Koovs</h4>
                    <p>Pending:</p>
                    <p>Inprogress:</p>
                    <p>Completed:</p>
                  </div>
                </div>
              </div>
              <div className='col-2'>
                <div className='user-project1'>
                  <div>
                    <h4>Koovs</h4>
                    <p>Pending:</p>
                    <p>Inprogress:</p>
                    <p>Completed:</p>
                  </div>
                </div>
              </div>
              <div className='col-2'>
                <div className='user-project1'>
                  <div>
                    <h4>Koovs</h4>
                    <p>Pending:</p>
                    <p>Inprogress:</p>
                    <p>Completed:</p>
                  </div>
                </div>
              </div> */}

            {/* </div>
          )
          } */}  
        </div>
        <div>
        </div>
      </section>
      {showManageProjects && <ManageProjects projects={showManageProjects} />}
    </>
  )
}

export default Dashboard