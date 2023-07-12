import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
   const navigate = useNavigate
   const logout = () => {
      window.localStorage.clear();
      navigate("/auth");

   }
  return (
     <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/create-recipe">create recipe</Link>
        <Link to="/saved-recipe">Saved-recipe</Link>
        {!localStorage.getItem("access_token") ? (
        <Link to="/auth">Login/Register</Link>
         ) : (
         <button onClick={logout}> Logout </button>
         )}
         <button>hello</button>
     </div>
  )
}