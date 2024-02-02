import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
