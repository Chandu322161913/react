import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

//global variable for restiapi_url
const url = `http://localhost:3001/users`  //array type of object

class Restapi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: [] //empty array
        }
    }

    //Restapicalls
    componentDidMount() {
        axios.get(url).then((result) => this.setState({ userData: result.data }))
    }

    //deletehandler
    DeleteHandler = (id) => {
        if (window.confirm(`Delete this Record number is : ${id} ? `)) {

            //delete the data
            axios.delete(`${url}/${id}`)

            //get fetch the data
            axios.get(url).then((result) => this.setState({ userData: result.data }));
        }
    }

    //render is mounting method
    render() {
        return (<>
            <div className="container p-5">
                <div className="row">
                    <h2 className="text-center">RestAPI DATA Using LOCAL URL PATH</h2>
                    <table className="table table-dark table-border">
                        <thead className="table table-success">
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>PHONE</th>
                                <th colSpan="4" className='text-center'>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.userData.map((res, i) => {
                                    return (<tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{res.uname}</td>
                                        <td>{res.mail}</td>
                                        <td>{res.phone}</td>
                                        <td>{res.action}</td>
                                        <td>
                                            <Link to={`/Restapi/view/${res.id}`} className="btn btn-primary"> View </Link>
                                        </td>
                                        <td>
                                            <Link to={`/Restapi/Edit/${res.id}`} className="btn btn-warning">Edit</Link>
                                        </td>
                                        <td>
                                            <button onClick={() => this.DeleteHandler(res.id)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>)
    }
}
export default Restapi