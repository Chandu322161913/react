//Imports
import React from 'react'
        
class Myclass extends React.Component{
//constuctor
 constructor(props){
    super(props);

    this.state={
        email:'chandu0435@gmail.com',
        phone:7799138419
    }
}
myfun(){
    return "These are Emp Details";
}

//class method
render(){
return(<>
<div className="container p-5">
    <h2>React Class Component And State Objects</h2>

    {/*{this.id}-{this.email}-{this.myfun()}-{MobileNo}*/}
    <p> Email is:{this.state.email}</p>

    <button onClick={()=>this.setState({email:'chandu0435@gmail.com'})}>Change My Email</button><br/><br/>
    <p>phone is:{this.state.phone}</p>

    <button onClick={()=>this.setState({phone:7799138419})}>Change My Number</button>
</div>
</>);
}
}
export default Myclass;