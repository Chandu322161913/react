import React from 'react'

class Lifecycle extends React.Component{
    //constructor is mounting method
    constructor(props){
        super(props);
        this.state={}
        console.log(`***Constructor_is_mounting_method***`)
    }

    //rest-api-calls
componentDidMount(){
    console.log(`**componentDidMount_is_mounting_method**`)
}

//render mounting
render(){
    console.log(`***Render_is_Mounting_method***`)
    return(<>
    <div className="p-5 text-center">
        <h2>React Lifecycle class component</h2>
    </div>
    </>)
}
}
export default Lifecycle;