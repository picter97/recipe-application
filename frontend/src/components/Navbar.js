import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
   const navigate = useNavigate
   const logout = () => {
      window.localStorage.removeItem("userID")
      navigate("/auth")
   }
  return (
     <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/create-recipe">create recipe</Link>
        <Link to="/saved-recipe">Saved-recipe</Link>
        <Link to="/auth">Login/register</Link>
        <button onClick={logout}> Log out</button>
     </div>
  )
}