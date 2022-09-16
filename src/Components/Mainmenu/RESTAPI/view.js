import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';


//global
var idno;
export default class view extends Component{
  constructor(props){
    super(props)
    this.state={
    }
  }

  render(){
    idno=this.props.match.params.idno
    console.log(idno)
    return(<>
    <div className="container p-5">
      <h2>VIEW COMPONENT PAGE</h2>
      <p>
        {idno}th Record Data
      </p>

      <ul>
        <li>{this.state.id}</li>
        <li>{this.state.uname}</li>
        <li>{this.state.mail}</li>
        <li>{this.state.phone}</li>
      </ul>

      <Link className="btn btn-success" to="/Restapi">GOTO BACK</Link>

    </div>
    </>)
  }

  //restapi calls
  componentDidMount(){
    const url = `http://localhost:3001/users/${idno}`
    axios.get(url).then((result) => this.setState(result.data));
  }
}