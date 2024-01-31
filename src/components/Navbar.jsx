import { Navbar } from "flowbite-react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import loaders from "../loaders/loaders.svg";

function Nav() {
  const location = useLocation();
  const { isLoading } = useSelector((state) => state.dataMahasiswa);

  return (
    <>
      <Navbar dark className="bg-gray-800 min-h-[3rem]">
        {isLoading ? (
          <img src={loaders} alt="loading" className="w-10 h-[1.5rem]" />
        ) : (
          <Navbar.Brand>
            {location.pathname === "/mahasiswa" ? (
              <h1 className="font-bold text-xl text-white">Mahasiswa</h1>
            ) : (
              <h1 className="font-bold text-xl text-white">Home</h1>
            )}
          </Navbar.Brand>
        )}
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            as={Link}
            to="/"
            className="text-white hover:text-gray-300"
            active={location.pathname === "/" ? true : false}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/mahasiswa"
            className="text-white hover:text-gray-300"
            active={location.pathname === "/mahasiswa" ? true : false}
          >
            Mahasiswa
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="container mx-auto">
        <Outlet />
      </div>
    </>
  );
}

export default Nav;
