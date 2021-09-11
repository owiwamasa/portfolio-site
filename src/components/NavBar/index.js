import { NavLink } from "react-router-dom"
import './NavBar.css'

function NavBar(){
    return(
        <div className='navbar'>
            <NavLink to='/react-gh-pages/'>Home</NavLink>
            <NavLink to='/react-gh-pages/projects'>Projects</NavLink>
            <NavLink to='/react-gh-pages/skills'>Skills</NavLink>
            <NavLink to='/react-gh-pages/about'>About</NavLink>
            <NavLink to='/react-gh-pages/contact'>Contact</NavLink>
        </div>
    )
}


export default NavBar
