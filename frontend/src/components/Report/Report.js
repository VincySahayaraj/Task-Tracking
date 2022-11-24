import React, { useState } from 'react';
import './report.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';


const Report = ({ submitForm }) => {

  // constructor(props) {

  //   super(props);
  //   this.state = {
  //     tasks: [],
  //     fromDate: "",
  //     toDate: ""

  //   }
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(event) {
  //   //console.log("Event", event)
  //   //this.setState({ msg: event.target.value });

  //   if (event.target.id == "txtfromDate") {
  //     this.setState({ fromDate: event.target.value }, function () {
  //       console.log("from date", this.state.fromDate);
  //     });
  //   }
  //   else if (event.target.id == "txttoDate") {
  //     this.setState({ toDate: event.target.value }, function () {
  //       console.log("to date", this.state.toDate);
  //     });
  //   }



  //   //console.log("ghhgh", this.state.msg)
  // }

  // const [fromDate, setFromDate] = useState();

  // const [toDate, setToDate] = useState();



  // const [filterDates, setFilterDates] = useState();

  // const { fromDate, toDate } = filterDates;

  // const handleChange = e => {
  //   const { name, value } = e.target
  //   setDate({
  //     ...dates,//spread operator 
  //     [name]: value
  //   })
  // }

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFilterDates(() => {
  //     return {
  //       ...filterDates,
  //       [name]: value,
  //     };
  //   });
  // };



  const [tasks, setTasks] = useState({
    fromDate: "",
    toDate: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setTasks({
      ...tasks,//spread operator 
      [name]: value
    })

    console.log("taskkkkkk report", tasks)
  }


  //get All tasks
  const getTasks = (event) => {

    event.preventDefault();

    console.log("getTasks from", tasks);

    // console.log("getTasks to date", this.state.toDate);

    axios.post("http://localhost:8000/taskreport", tasks)
      .then(res => {
        // alert(res.data.message)

        

        for(var i=0; i< res.data.tasks.length; i++)
        {
          var date = res.data.tasks[i].date;

          res.data.tasks[i].date = date.replace("T"," ");

        }

        setTasks(res.data.tasks);

        console.log("Return Data", tasks);

      }
      )

  }

  return (
    <>
      <div className='report-section'>
        <label>From Date</label>
        <input type="date" className='from-date' id="txtfromDate" onChange={handleChange}
          name='fromDate'
          value={tasks.fromDate}
        />
        <label>To Date</label>
        <input type="date" className='from-date' id="txttoDate" onChange={handleChange}
          name='toDate'
          value={tasks.toDate} 
          />

        <Button className='search-btn' type='submit' onClick={getTasks}>Search</Button>
      </div>
      <div className='"table table-striped"'>
        <button className='submit' >Daily Tasks</button>
        <br />&nbsp;

        <br />
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th >Name</th>
              <th >Daily Task</th>
              <th >Estimated Time</th>
              <th >Date</th>


            </tr>
          </thead>
          <tbody>
            {
              tasks.length > 0 ? (
                tasks.map(tasks =>
                  <tr key={tasks._id}>
                    <td>{tasks.username}</td>
                    <td>{tasks.dailytask}</td>
                    <td>{tasks.time}</td>
                    <td>{tasks.date}</td>
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

export default Report