import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { SlEvent } from "react-icons/sl";
import { GrBusinessService } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside className="col-span-2 bg-gray-300 h-screen sticky top-0 left-0 overflow-auto p-5">
      <nav className="flex flex-col">
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 bg-gray rounded-md hover:bg-gray-600 bg-gray-200 mb-2 p-3 hover:text-white ${
              isActive ? "bg-gray-600 text-white" : ""
            }`
          }
          to="/"
        >
          <IoHomeOutline className="shrink-0 text-[22px]" />
          <span className="truncate">Home</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 bg-gray rounded-md hover:bg-gray-600 bg-gray-200 mb-2 p-3 hover:text-white ${
              isActive ? "bg-gray-600 text-white" : ""
            }`
          }
          to="/dashboard/my-dashboard"
        >
          <RxDashboard className="shrink-0 text-xl" />
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 bg-gray rounded-md hover:bg-gray-600 bg-gray-200 mb-2 p-3 hover:text-white ${
              isActive ? "bg-gray-600 text-white" : ""
            }`
          }
          to="/dashboard/events"
        >
          <SlEvent className="shrink-0" />
          <span className="truncate">Events</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 bg-gray rounded-md hover:bg-gray-600 bg-gray-200 mb-2 p-3 hover:text-white ${
              isActive ? "bg-gray-600 text-white" : ""
            }`
          }
          to="/dashboard/event-services"
        >
          <GrBusinessService className="shrink-0" />
          <span className="truncate">Event Services</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
