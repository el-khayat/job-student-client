import React from "react";
import Home from "./pages/Home";
import Posts from "./pages/Postes";
import PostE from "./components/blog/postsE";
import PostP from "./components/blog/postsP";
import Profile from "./pages/Profile";
import Singin from "./pages/Singin";
import Singup from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addpost from "./pages/addpost";
import Mesposts from "./pages/meposts";
import Admin from "./pages/Adminpage"

import Intro from "./componentshome/admin/introadmin/intro"
import Postes from "./componentshome/admin/poste/poste"
import Util from "./componentshome/admin/utilisateurs/utilisateurs"
// import Commentaire from "./componentshome/admin/introadmin/intro"

// import  AddP from "./components/blog/addposte"
// import  AddE from "./components/blog/addposte"

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />



<Route path="/" element={<Home/>} />
                 
                  <Route  path="/siladmin" element={<Admin/>} >
                                    <Route  index element={<Intro/>} />
                                    <Route  path="listeP" element={<Postes/>} />
                                    <Route  path="listeU" element={<Util/>} />
                   </Route>



          <Route path="/singin" element={<Singin />} />
          <Route path="/singup" element={<Singup />} />


          <Route path="posts" element={<Posts />}>
            <Route index element={<Mesposts />} />
            <Route path="mesposts" element={<Mesposts />} />
            <Route path="addpost" element={<Addpost />} />
            <Route path="postetudiant" element={<PostE />} />
            <Route path="postprof" element={<PostP />} />
          </Route>
          <Route path="/profile" element={<Profile />}>
          <Route path=":id" element={<Profile />} />
          </Route>


          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
