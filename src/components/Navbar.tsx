import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

const Navbar = () => {
  return (
    <nav className="bg-gray-200 p-4 flex justify-between items-center">
      <div className="text-black">
        <Link to="/">MyApp</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/about">
          <Button color="primary">About</Button>
        </Link>
        <Link to="/contact">
          <Button color="primary">Contact</Button>
        </Link>
        <Link to="/services">
          <Button color="primary">Services</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
