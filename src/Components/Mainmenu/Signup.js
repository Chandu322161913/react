import React, {Component} from 'react'
import axios from 'axios';

//global variable for restiapi_url
const url = `http://localhost:3001/users`  //array type of object

export default class Signup extends Component{
  constructor(props){
    super(props)
    this.state = {
      uname : '',
      mail : '',
      phone : '',
      txtConformation:''
    }
  }

  unameHandling = (e) => {
    this.setState({uname:e.target.value})
  }

  mailHandling = (e) => {
    this.setState({mail:e.target.value})
  }

  phoneHandling=(e)=>{
    this.setState({phone:e.target.value})
  }

  submitHandler=(e)=>{

    e.preventDefault();

    var FormData=
    {
      'uname' : this.state.uname,
      'mail' : this.state.mail,
      'phone': this.state.phone
    }
    alert(JSON.stringify(FormData));

         //for only alert conformation
            /*axios.post(url, FormData)
              .then(() =>window.alert("...CREATED..."))
              .catch(()=>window.alert("..ERROR..")); */

         //for text conformation
            /* axios.post(url, FormData)
               .then(()=> this.setState({txtConformation:'Account Created'}))
               .catch(()=> this.setState({txtConformation:'Account Failed'}));*/

         //for autoredirect page
            axios.post(url, FormData)
            .then(()=>{
              //window.alert("..created..")
              this.props.history.push('/Restapi')
            });
          
  }

  
  render(){
    console.log(this.props)
    //destructuring
    var {uname, mail, phone, txtConformation} = this.state

    return(<>

    <div className="container p-3">
      <h3 className="text-center py-3">USER REGISTRATION</h3>
      <div className="container w-50">
        
        <form onSubmit={this.submitHandler.bind(this)}>

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control"
                value={uname}
            onChange={this.unameHandling.bind(this)}/>
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control"
                value={mail}
            onChange={this.mailHandling.bind(this)}/>
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="number" className="form-control"
                value={phone}
            onChange={this.phoneHandling.bind(this)}/>
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary">CREATE NEW ACCOUNT</button>
          </div>

          <p className="text-primary">{txtConformation}</p>

        </form>
      </div>
    </div>
    </>)
  }
}