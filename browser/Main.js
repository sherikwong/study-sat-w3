import React, { Component } from "react";
import axios from "axios";
import StudentList from "./StudentList";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    // const res = await axios.get("/student"); // Why doesn't this work?
    // // const students = res.data
    // this.setState({ students: res.data });

    axios.get("/student").then(res => {
      this.setState({ students: res.data });
    });
  }

  render() {
    const students = this.state.students;
    // console.log(students)

    return (<StudentList students={this.state.students} />)
  }
}
