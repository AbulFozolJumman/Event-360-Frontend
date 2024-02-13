import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { SlEvent } from "react-icons/sl";
import { GrBusinessService } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { TbToolsKitchen } from "react-icons/tb";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="col-span-2 bg-[#E6D9F7] h-screen sticky top-0 left-0 overflow-auto p-2 md:p-5">
      <nav className="flex flex-col">
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-md  mb-2 p-3 bg-[#5A01CB] hover:bg-white py-4 text-white hover:text-[#5A01CB] hover:border hover:border-[#5A01CB] ${
              isActive ? "bg-indigo-600 border border-[#5A01CB]" : ""
            }`
          }
          to="/"
        >
          <IoHomeOutline className="shrink-0 text-[22px]" />
          <span className="truncate mobile">Back to Home</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-md  mb-2 p-3 bg-[#5A01CB] hover:bg-white py-4 text-white hover:text-[#5A01CB] hover:border hover:border-[#5A01CB] ${
              isActive ? "bg-indigo-600 border border-[#5A01CB]" : ""
            }`
          }
          to="/dashboard/my-dashboard"
        >
          <RxDashboard className="shrink-0 text-xl" />
          <span className="truncate mobile">Dashboard</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-md  mb-2 p-3 bg-[#5A01CB] hover:bg-white py-4 text-white hover:text-[#5A01CB] hover:border hover:border-[#5A01CB] ${
              isActive ? "bg-indigo-600 border border-[#5A01CB]" : ""
            }`
          }
          to="/dashboard/events"
        >
          <SlEvent className="shrink-0" />
          <span className="truncate mobile">Events</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-md  mb-2 p-3 bg-[#5A01CB] hover:bg-white py-4 text-white hover:text-[#5A01CB] hover:border hover:border-[#5A01CB] ${
              isActive ? "bg-indigo-600 border border-[#5A01CB]" : ""
            }`
          }
          to="/dashboard/event-services"
        >
          <GrBusinessService className="shrink-0" />
          <span className="truncate mobile">Event Services</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-md  mb-2 p-3 bg-[#5A01CB] hover:bg-white py-4 text-white hover:text-[#5A01CB] hover:border hover:border-[#5A01CB] ${
              isActive ? "bg-indigo-600 border border-[#5A01CB]" : ""
            }`
          }
          to="/dashboard/event-items"
        >
          <TbToolsKitchen className="shrink-0" />
          <span className="truncate mobile">Event Items</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
