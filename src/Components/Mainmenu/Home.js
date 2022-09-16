//home.js module 
import React from 'react'

//image
import Profile from './../../Assets/images/Jr_NTR.jpg'

//background
import Bgwallpaper from './../../Assets/images/backimage.jpg'

//Images styles
var styles={
    backgroundImage:`URL(${Bgwallpaper})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
}

//create home component
function Home(){

    return(<div>
    <div className="text-white" style={styles}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 p-5">
                    <h1 className="h1 py-5 mt-5">Nandamuri Taraka Ramarao</h1>
                    <h4 className="bg-success p-2 mt-3 w-75 text-center">Tollywood Tiger</h4>
                </div>
                <div className="col-lg-6 p-5">
                    <img src={Profile} className="w-50 ma-auto" alt="NTR goes to next movie"/>
                </div>
            </div>
        </div>
    </div>

         </div>)
}
export default Home;