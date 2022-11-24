
import React, { Component, filter } from 'react'
import axios from 'axios';
import logout from '../logout';
import { Table, Button } from 'react-bootstrap'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { RiEdit2Line } from 'react-icons/ri'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


class Admin extends Component {
  // var storing = localStorage.getItem('currentUser');
  // var currentuser = JSON.parse(storing)
  //  navigate = useNavigate();
  constructor(props) {

    super(props);
    this.state = {
      users: [],
    }
  }

  //lifecycle hook for get users
  componentDidMount() {
    this.getUsers();
  }


  //get All Users
  getUsers() {
    axios.get('http://localhost:8000/users').then(res => {

      if (res.data.success) {
        this.setState({
          users: res.data.users,

        });
        //this.state.users.sort();
        console.log(this.state.users)

      }
    });
  }


  //Delete User
  del = (users) => {

    var option = window.confirm(`Are You sure Want to delete  ${users.firstname}`)
    if (option) {
      axios.delete(`http://localhost:8000/delete/${users._id}`).then(res => {

        alert("Deleted Successfully")
        this.getUsers();

      })

    }

  }


  //filter function for searching
  filterContent(users, searchTerm) {
    console.log(users)
    const result = users.users.filter((user) => user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()))
    console.log(result)
    this.setState({ users: result });
  }

 //Search Function
 handleTextSearch = (event) => {

  const searchTerm = event.currentTarget.value;
  axios.get('http://localhost:8000/users').then(res => {
    console.log(res.data)

    if (res.data.success) {
      this.filterContent(res.data, searchTerm)
    }
  })
};



  render() {

    return (

      <>


        {/* <h1 className="form-success mt-5">Welcome Admin ! </h1> */}
        <div style={{ marginTop: '30px' }}>

          <a style={{ float: 'right' }} className='add-user-link' href="/register">Add Users</a>

        </div>

        <div className='"table table-striped"'>
          <div className='manage d-flex justify-content-center'>
          <div className='manage-heading' >Manage Users</div>
          </div>
         
          <br />&nbsp;


          <div style={{
            width: '100%', height: '40px'
          }}>
            <label>Search Here <BsSearch /></label>&nbsp;
            <input type="search"
              placeholder="search..."
              name='searchTerm'
              onChange={this.handleTextSearch} />

          </div>
          <br />
          <br />
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th >Name</th>
                <th >Username</th>
                <th >Email</th>
                <th >Edit</th>
                <th>Delete</th>

              </tr>
            </thead>
            <tbody>
              {
                this.state.users.length > 0 ? (
                  this.state.users.map(users =>
                    <tr key={users._id}>
                      <td>{users.firstname}</td>
                      <td>{users.lastname}</td>
                      <td>{users.email}</td>
                      {/* <td>{users.role}</td> */}

                      <td><a className='btn btn-warning'
                        href={`/edituser/${users._id}`}
                      ><RiEdit2Line />
                      </a></td>

                      <td><button
                        className="btn btn-primary"
                        onClick={() => { this.del(users) }}
                      ><RiDeleteBin6Line />
                      </button></td>
                    </tr>
                  )
                )
                  : (
                    <tr>No data</tr>
                  )
              }
            </tbody>
          </Table>
        </div>
      </>
    )
  }

}
export default Admin

