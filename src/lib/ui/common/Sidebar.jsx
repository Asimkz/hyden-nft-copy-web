import { NavLink } from "react-router-dom";
import sidebar from "../../json/sidebar/sidebar.json";
import icons from "../../global/Icons";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const Cross = icons.cross;

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[450px] bg-black px-5 flex flex-col py-7 z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-[90%] flex justify-end mt-3">
        <button
          className="text-white text-2xl ml-auto top-4 bg-transparent left-4"
          onClick={toggleSidebar}
        >
          <Cross size={48} />
        </button>
      </div>
      <div className="flex flex-col mt-6 gap-2">
        {sidebar.links.slice(0, 5).map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className="sidebar-link"
            onClick={toggleSidebar}
          >
            {link.name}
          </NavLink>
        ))}

        <div className="border-bottom-second"></div>

        {sidebar.links[5] && (
          <NavLink
            to={sidebar.links[5].path}
            className="sidebar-nft-link"
            onClick={toggleSidebar}
          >
            {sidebar.links[5].name}
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
