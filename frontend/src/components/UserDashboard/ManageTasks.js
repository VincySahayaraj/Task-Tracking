
import React, { Component, filter } from 'react'
import axios from 'axios';
import logout from '../logout';
import { Table, Button } from 'react-bootstrap'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { RiEdit2Line } from 'react-icons/ri'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


class ViewTasks extends Component {
  // var storing = localStorage.getItem('currentUser');
  // var currentuser = JSON.parse(storing)
  //  navigate = useNavigate();
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      userId: ''
    }
  }

getTasksById(id){
      axios.get(`http://localhost:8000/tasks/${id}`).then(res => {
    
     if (res.data.success) {
      this.setState({
        tasks: res.data.tasks,
      });
    }
    });
  }

  //lifecycle hook for get users
  componentDidMount() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.user) {
      const user = currentUser.user;
      const userId = user._id;
      this.getTasksById(userId);
      this.setState({ userId });
    }
  }

  //get All tasks
  getTasks() {
    axios.get('http://localhost:8000/tasks').then(res => {
      if (res.data.success) {
        this.setState({
          tasks: res.data.tasks,
        });
      }
    });
  }

  //filter function for searching
  filterContent(tasks, searchTerm) {
    const result = tasks.tasks.filter((task) => task.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.dailytask.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.date.toLowerCase().includes(searchTerm.toLowerCase())
    )
    this.setState({ tasks: result });
  }

  //Search Function
  handleTextSearch = (event) => {

    const searchTerm = event.currentTarget.value;
    axios.get('http://localhost:8000/tasks').then(res => {
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
        </div>

        <div className='"table table-striped"'>
          <div className='manage d-flex justify-content-center'>
            <div className='manage-heading' >Manage Tasks</div>
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
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th >Name</th>
                <th >Daily Task</th>
                <th >Due Date</th>

              </tr>
            </thead>
            <tbody>
              {
                this.state.tasks.length > 0 ? (
                  this.state.tasks.map(tasks =>
                    <tr key={tasks._id}>
                      <td>{tasks.username}</td>
                      <td>{tasks.dailytask}</td>
                      <td>{tasks.estimatedtime}</td>
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
export default ViewTasks

