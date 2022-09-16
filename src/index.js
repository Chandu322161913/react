//Index.js--rootmodule for entire project

import React from 'react'

import ReactDOM from 'react-dom'

//import bootstrap into react
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//import Routings.js
import Routings from './Components/Routings.js'

ReactDOM.render(<Routings/>,document.getElementById('root'))