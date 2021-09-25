import { FaBars } from "react-icons/fa"
import "./style.css"
import { Link } from "react-router-dom"

const Navbar = ({ toggle }) => {
  return (
    <>
      <div className="navbar">
        <Link to="/add">Add Album</Link>

        <Link to="/albums">Albums</Link>
      </div>
    </>
  )
}

export default Navbar
