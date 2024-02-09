import { Outlet } from "react-router-dom";
import Sidebar from "../../Pages/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <div className="col-span-10 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
