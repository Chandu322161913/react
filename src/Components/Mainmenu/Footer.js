//Footer.js module 
import React from 'react'

//create service component
function Footer() {
    return (<>

        <div className="Containter bg-dark pt-3">
            <div className="row">
                <div className="col-lg-3">
                    <ul className="text-white">
                        <li>React</li>
                        <li>React-Dom</li>
                        <li>Router-Dom</li>
                        <li>Material-UI</li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <ul className="text-white">
                        <li>Home</li>
                        <li>Course</li>
                        <li>Teacher</li>
                        <li>Review</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <ul className="text-white">
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Linkdin</li>
                        <li>Whats App</li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <ul className="text-white">
                        <li>+123-456-7890</li>
                        <li>metrolabs@gmail.com</li>
                        <li>Hyderabad, India</li>
                        <li>Pin-500072.</li>
                        <li>Google Maps</li>
                    </ul>
                </div>
            </div>
        </div>
    </>)
}
export default Footer;