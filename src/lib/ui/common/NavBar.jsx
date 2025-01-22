import icons from "../../global/Icons";
import LOGO from "../../../assets/img/LOGO.png";
import { NavLink } from "react-router-dom";

const NavBar = ({ toggleSidebar }) => {
  const Hamburger = icons.hamburger;

  return (
    <div className="flex justify-between items-center w-[90%] mx-auto sticky z-20">
      <div className="w-[200px]">
        <NavLink to="/">
          <img src={LOGO} alt="" />
        </NavLink>
      </div>
      <button className="bg-transparent" onClick={toggleSidebar}>
        <Hamburger size={36} />
      </button>
    </div>
  );
};

export default NavBar;
