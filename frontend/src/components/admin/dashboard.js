import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import './dashboard.css';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { RiEdit2Line } from 'react-icons/ri';
import axios from 'axios';


import { Table, Button } from 'react-bootstrap';

const Dashboard = () => {

  //  const[showproject,setShowproject]=useState();
  var projshow = false;

  const [showproject, setShowproject] = useState(false);
  const [showprojdetails, setShowprojdetails] = useState(false);

  const [users, setUsers] = useState();
  const [projects, setProjects] = useState();

  const show = (id) => {

    //alert(id)


  getProjectsforusers(id);
    setShowproject(!showproject);

    if (showprojdetails) {
      setShowprojdetails(!showprojdetails);
    }

  }

  const getProjects = () => {
    axios.get('http://localhost:8000/projects').then(res => {

      if (res.data.success) {
        // this.setState({
        //   projects: res.data.projects,

        // });

        setProjects(res.data.projects)
        //this.state.users.sort();
        console.log(projects);
        // window.processData("mydata");l
      }
    });
  }

  const getProjectsforusers = (id) => {
    axios.get(`http://localhost:8000/users/projects/${id}`).then(res => {
      alert(id);

      if (res.data.success) {
        // this.setState({
        //   projects: res.data.projects,

        // });

        setProjects(res.data.projects)
        //this.state.users.sort();
        console.log(projects);
        // window.processData("mydata");l
      }
    });
  }



  //get All Users
  const getUsers = () => {
    axios.get('http://localhost:8000/users').then(res => {

      if (res.data.success) {
        console.log("users comingg", users)

        // this.setState({
        //   users: res.data.users,

        // });
        setUsers(res.data.users)
        //this.state.users.sort();
        console.log("users", users)

      }
    });
  }

  //get users 
  useEffect(() => {
    getUsers();
    //getProjects();
  }, [])



  return (
    <>
      <section>
        <div className='row task-home'>
          {/* <div className='col-lg-2 col-xl-2 col-sm-4 col-xs-4'>
            <Avatar size="100" facebook-id="invalidfacebookusername" src="https://thumbs.dreamstime.com/b/portrait-young-man-beard-hair-style-male-avatar-vector-portrait-young-man-beard-hair-style-male-avatar-105082137.jpg" round={true} onClick={() => {
              show()
            }} /> */}

          {
            users != undefined ? (
              users.map(users =>

                <div className='col-lg-2 col-xl-2 col-sm-4 col-xs-4' >
                  <Avatar size="100" facebook-id="invalidfacebookusername" src="https://thumbs.dreamstime.com/b/portrait-young-man-beard-hair-style-male-avatar-vector-portrait-young-man-beard-hair-style-male-avatar-105082137.jpg" round={true} onClick={() => {
                    show(users._id)
                  }} />
                  <div className='user-avatar' key={users._id} >
                    <p className="project-name-avatar">{users.firstname}</p>
                  </div>
                </div>
              )) : (
              <>No data</>
            )}

          {/* <div className=''>
              <p className="project-name-avatar">koovs</p>
            </div> */}

          {/* <div className='col-lg-2 col-xl-2 col-sm-4 col-xs-4'>
            <Avatar size="100" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" round={true} onClick={() => setShowproject(!showproject)} />
            <p className="project-name-avatar">Ramkumar</p>
          </div>
          <div className='col-lg-2 col-xl-2 col-sm-4 col-xs-4'>
            <Avatar size="100" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" round={true} onClick={() => setShowproject(!showproject)} />
            <p className="project-name-avatar">Anu Vivin</p>
          </div>
          <div className='col-lg-2 col-xl-2 col-sm-4 col-xs-4'>
            <Avatar size="100" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" round={true} onClick={() => setShowproject(!showproject)} />
            <p className="project-name-avatar">Abilash</p>
          </div>
          <div className='col-lg-2 col-xl-2 col-sm-4 col-xs-4'>
            <Avatar size="100" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" round={true} onClick={() => setShowproject(!showproject)} />
            <p className="project-name-avatar">Afzal</p>
          </div> */}

          {showproject && (
            <div className='row proj-box' >

              {
                projects != undefined ? (
                  projects.map(projects =>
                    <div className='col-2 pending-box'>
                      <div className='user-project1' key={projects._id}  onClick={() => setShowprojdetails(!showprojdetails)}>
                        <h4>{projects.projectname}</h4>
                        <p>Pending:</p>
                        <p>Inprogress:</p>
                        <p>Completed:</p>
                      </div>
                    </div>
                  )
                ) : (
                <>
                No data
                </>
                )}

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

            </div>
          )
          }
          {showprojdetails && (
            <Table striped bordered hover variant="dark" className="project-details-table">
              <thead>
                <tr>
                  <th >Project Name</th>
                  <th >Description</th>
                  <th >Project Image</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>

                <tr >
                  <td>sfsf</td>
                  <td>sfsf</td>
                  <td>sfsf</td>
                  <td><a className='btn btn-warning'

                  ><RiEdit2Line />
                  </a></td>
                  <td><button
                    className="btn btn-primary"

                  ><RiDeleteBin6Line />
                  </button></td>
                </tr>
              </tbody>
            </Table>

          )}

        </div>
        <div>
        </div>
      </section>
    </>
  )
}

export default Dashboard