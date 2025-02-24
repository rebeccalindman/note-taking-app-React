
import { NavLink } from 'react-router-dom' 

function Navbar() {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/all-notes'>All Notes</NavLink>
    </nav>
  )
}

export default Navbar