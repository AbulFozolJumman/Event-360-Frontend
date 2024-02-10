import { useState } from "react";
import Events from "./Events/Events";
import EventServices from "./EventServices/EventServices";
import EventItems from "./EventItems/EventItems";
import { SlEvent } from "react-icons/sl";
import { GrBusinessService } from "react-icons/gr";
import { TbToolsKitchen } from "react-icons/tb";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("events"); // Set an initial active tab

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="grid grid-cols-3 gap-2 md:gap-5">
          <button
            onClick={() => handleTabClick("events")}
            className="text-white p-4 rounded hover:bg-white hover:text-[#5A01CB] focus:bg-indigo-600 focus:text-white focus:border focus:border-[#5A01CB] hover:border hover:border-[#5A01CB] bg-[#5A01CB] shadow-md flex items-center justify-center gap-2"
          >
            <SlEvent className="shrink-0" />
            <span className="truncate">Events</span>
          </button>
          <button
            onClick={() => handleTabClick("services")}
            className="p-4 rounded hover:bg-white hover:text-[#5A01CB] focus:bg-indigo-600 focus:text-white focus:border focus:border-[#5A01CB] hover:border hover:border-[#5A01CB] bg-[#5A01CB] text-white shadow-md flex items-center justify-center gap-2"
          >
            <GrBusinessService className="shrink-0" />
            <span className="truncate">Event Services</span>
          </button>
          <button
            onClick={() => handleTabClick("items")}
            className="p-4 rounded hover:bg-white hover:text-[#5A01CB] focus:bg-indigo-600 focus:text-white focus:border focus:border-[#5A01CB] hover:border hover:border-[#5A01CB] bg-[#5A01CB] text-white shadow-md flex items-center justify-center gap-2"
          >
            <TbToolsKitchen className="shrink-0" />
            <span className="truncate">Event Items</span>
          </button>
        </div>
        <div className="py-8">
          {activeTab === "events" && <Events />}
          {activeTab === "services" && <EventServices />}
          {activeTab === "items" && <EventItems />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
