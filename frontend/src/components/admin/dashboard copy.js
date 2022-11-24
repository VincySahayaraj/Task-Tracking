import React, { Component, filter } from 'react'
import axios from 'axios';
import CanvasJSReact from '../../canvasjs.react';
import $ from 'jquery'; 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



class Dashboard extends Component {

  constructor(props) {

    super(props);
    this.state = {
      users: [],
      tasks: [],
    }
  }

  //lifecycle hook for get users
  componentDidMount() {
    this.getTasks();
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

  render() {

    const values = [];

    console.log("asdasd", this.state.tasks);

    //const items = this.state.tasks.map(v => `{ date: '${v.date}', time: '${v.time}' },`);

    // for (var i = 0; i < this.state.tasks.length; i++) {
    //   values.push(items[i]);
    // }
    
    var result = ""

    // var obj = {
    //   length: 0,
    
    //   addElem(elem) {
    //     // obj.length is automatically incremented
    //     // every time an element is added.
    //     [].push.call(this, elem);
    //   },
    // };

    for (var i = 0; i < this.state.tasks.length; i++) {

      this.state.tasks[i].date = this.state.tasks[i].date.replace("T"," ").replace("Z","");

      // if(i == this.state.tasks.length - 1)
      // {
        var myval = {label:  this.state.tasks[i].date , y: this.state.tasks[i].time };

        if(i != this.state.tasks.length - 1)
          result = result + JSON.stringify(myval) + ",";
        else
          result = result + JSON.stringify(myval);

        //console.log("myval", JSON.stringify(myval));

        //obj.addElem(myval);
        
      //}
      
    }
    console.log("result", result);

    var jsonObj = $.parseJSON('[' + result + ']');

    //const myArr = JSON.parse(result);

    // console.log("Json", result);

    // const result1 = '{label:2022-10-28 10:56:15.684,y:6},{label:2022-10-28 10:56:15.684,y:6},{label:2022-10-28 10:56:15.684,y:6},{label:2022-10-28 10:56:15.684,y:6},{label:2022-10-28 10:56:15.684,y:6},{label:2022-10-28 10:56:15.684,y:6},{label:2022-10-28 10:56:15.684,y:6},{label:2022-10-28 10:56:15.684,y:6},{label:2022-10-28 10:56:15.684,y:6}'

    // var jsonObj = $.parseJSON('[' + result1 + ']');

    // values.push(jsonObj);

    //const items = values.join(",");


    //const items = this.state.tasks.map(v => `{ date: '${v.date}', time: '${v.time}' },`);
     //const valuess = result
     console.log("VAluessss", values);

    const options = {
      title: {
        text: "TASK REPORT"
      },
      data: [{
        type: "column",
        dataPoints: [values
        // {label: '2022-10-28 10:56:15.684', y: 6},
        // {label: '2022-10-28 10:56:31.981', y: 78},
        // {label: '2022-10-29 10:57:34.402', y: 6},
        // {label: '2022-10-30 18:57:59.979', y: 6},
        // {label: '2022-10-28 10:58:17.587', y: 5},
        // {label: '2022-10-28 10:58:50.301', y: 7},
        // {label: '2022-10-29 10:59:20.619', y: 7},
        // {label: '2022-10-28 12:56:29.399', y: 11},
        // {label: '2022-10-28 13:03:39.310', y: 5}
]
    }]}

    return (
      <>
        <CanvasJSChart options={options}
        /* onRef = {ref => this.chart = ref} */
        />
      </>
    )
  }

}

export default Dashboard;