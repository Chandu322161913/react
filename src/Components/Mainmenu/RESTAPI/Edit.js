import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

//global
var idno;

const url=`http://localhost:3001/users/`

export default class Edit extends Component {
    constructor(props) {
        super(props)
        this.state =
        {
            uname: '',
            mail: '',
            phone: '',
            txtConformation: ''
        }
    }

    unameHandling = (e) => {
        this.setState({ uname: e.target.value })
    }

    mailHandling = (e) => {
        this.setState({ mail: e.target.value })
    }

    phoneHandling = (e) => {
        this.setState({ phone: e.target.value })
    }

    submitHandler = (e) => {

        e.preventDefault();

        var FormData =
        {
            'uname': this.state.uname,
            'mail': this.state.mail,
            'phone': this.state.phone
        }

        //alert(JSON.stringify(FormData));

        //for autoredirect page
        axios.put(`${url}/${idno}`, FormData)
            .then(() => {
                //window.alert("..created..")
                this.props.history.push('/Restapi')
            });

    }

    render() {
        idno = this.props.match.params.idno
        console.log(idno)

        //destructuring
        var { uname, mail, phone, txtConformation } = this.state

        return (<>
            <div className="container p-5">
                <h3 className="text-center">EDIT_PAGE_SECTION</h3>

                <form onSubmit={this.submitHandler.bind(this)}>

                    {/* <div class="mb-3">
                    <label class="form-label">ID</label>
                    <input type="Number" class="form-control" 
                    value={id}
                    onChange={this.unameHandling.bind(this)}/>
                </div>  */}

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control"
                            value={uname}
                            onChange={this.unameHandling.bind(this)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="mail" className="form-control"
                            value={mail}
                            onChange={this.mailHandling.bind(this)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">ph_number</label>
                        <input type="Number" className="form-control"
                            value={phone}
                            onChange={this.phoneHandling.bind(this)} />
                    </div>

                    <div className="mb-3">
                        <Link className="btn btn-success mx-3" to="/Restapi">GOTO BACK</Link>
                        <button type="submit" className="btn btn-warning text-white" value="update">UPDATE</button>
                    </div>

                    <p className="text-primary">{txtConformation}</p>

                </form>
            </div>
        </>)
    }

    componentDidMount() {
        axios.get(`${url}/${idno}`).then((result) => this.setState(result.data));
    }
}