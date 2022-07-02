import React from 'react'
import Topbar from "../componentshome/admin/topbar/topbar.js"
import Intro from "../componentshome/admin/introadmin/intro.js"

import { Outlet } from 'react-router-dom'



const Adminpage = () => {
  return (
    <div>
       
        <Topbar />
        <Outlet/>
       
        
   </div>

  )
}

export default Adminpage