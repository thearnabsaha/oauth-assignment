import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };
  console.log(user);
  return (
    <div className="navbar">
      {user ? (
        <div>
          <h1>{user.displayName}</h1>
          <h3 onClick={logout}>Logout</h3>
        </div>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
