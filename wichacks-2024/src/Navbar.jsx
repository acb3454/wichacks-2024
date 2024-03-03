import { Link, useMatch, useResolvedPath } from "react-router-dom"
import headphoneLogo from "./Photos/TFWPicLogo.png"
import TFWtext from "./Photos/TFW.png"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
      <img style={{ width: "75px", height: "75px", marginRight: "10px"}}
      src={headphoneLogo} alt="TFW" />
      <img style={{ width: "75px", height: "75px"}}
      src={TFWtext} alt="TFW..." />
      </Link>
      <ul class>
        <CustomLink to="/feed">Feed</CustomLink>
        <CustomLink to="/profile">Profile</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/highlights">Highlights</CustomLink>
       
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
