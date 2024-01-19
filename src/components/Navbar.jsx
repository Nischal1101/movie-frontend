import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import context from "../context/Context";

const Navbar = () => {
  const a = useContext(context);
  const handleLogout = () => {
    localStorage.clear("token");
    a.setIstoken(false);
  };

  return (
    <>
      <div className=" bg-white sticky z-10 top-0 flex justify-between p-4 items-center border-b-2 border-black">
        <Link to="/">
          <h1 className="text-blue-500 text-2xl">
            <span className="text-2xl text-red-500">Movie</span>Verse
          </h1>
        </Link>
        {!localStorage.getItem("token") ? (
          <>
            <Link to="/login">
              <button className="mr-3 flex items-center ">
                <span className="text-2xl text-black">Login</span>
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/addmovie">
              <button className="mr-3 flex items-centSer ">
                <span className="mr-2 bg-blue-400">
                  <FaPlus size={30} />
                </span>
                <span className="text-black">Add Movie</span>
              </button>
            </Link>
            <button className="text-center text-2xl" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
