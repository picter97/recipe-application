import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
     <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/create-recipe">create recipe</Link>
        <Link to="/saved-recipe">Saved-recipe</Link>
        <Link to="/auth">Login/register</Link>
     </div>
  )
}