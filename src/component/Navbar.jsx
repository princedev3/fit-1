import { useState } from "react"
import "../style/navbar.css"
import {FaBars} from "react-icons/fa" 
import {FaTimes} from "react-icons/fa" 


const Navbar = () => {
    const [activenav,setActivenav] = useState(false)
    const [navcolor,setNavcolor]= useState(false)

    const changeColor= ()=>{
        if(window.scrollY > 90){
            setNavcolor(true)
        }else{
            setNavcolor(false)
        }
    }
    window.addEventListener("scroll",changeColor)
  return (
    <div className={navcolor? "navbar navcolor":"navbar"}>
        <div className="header">
            <h2><span>Hapi</span>Feet</h2>
        </div>

        <div className={activenav? "navbar-element navbar-element-active":"navbar-element"}>
             <a href="#" onClick={()=>setActivenav(false)}>
            <h3>
                home
            </h3>
             </a>

             <a href="#aboutme" onClick={()=>setActivenav(false)}>
            <h3>
                about
            </h3>

             </a>
             <a href="#project" onClick={()=>setActivenav(false)}>
            <h3>
                project
            </h3>
             </a>

             <a href="#contact" onClick={()=>setActivenav(false)}>
            <h3>
                contact
            </h3>
             </a>
             
    </div>
    <div  onClick={(()=>setActivenav(!activenav))}>
    {activenav? <FaTimes className="navbar-icon"/> :<FaBars className="navbar-icon"/>}
    </div>
    </div>
  )
}
//{}[]
export default Navbar