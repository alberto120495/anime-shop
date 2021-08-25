import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";

function Header() {
  const { user } = useContext(UserContext);
  return (
    <div className="w-full flex justify-between items-center p-4 bg-space">
      <Link to="/">Logo</Link>
      {user.email && <Link to="/admin">Admin Panel</Link>}
    </div>
  );
}

export default Header;
