import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useCookies } from "react-cookie";

export const Navbar = () => {
   const [cookies, setCookies] = useCookies(["access_token"]);
   const navigate = useNavigate();
   const logout = () => {

      setCookies("access_token", "");
      window.localStorage.removeItem("userID")
      navigate("/auth")
   }
  return (
     <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/create-recipe">create recipe</Link>
        <Link to="/saved-recipe">Saved-recipe</Link>

        {!cookies.access_token ? (
        <Link to="/auth">Login/register</Link>
        ) : (
        <button onClick={logout}> Log out</button>
        )}
     </div>
  )
}