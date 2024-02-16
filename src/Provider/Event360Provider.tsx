import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ReactNode, createContext } from "react";

export const Event360Context = createContext({});

interface Event360ProviderProps {
  children: ReactNode;
}

const Event360Provider: React.FC<Event360ProviderProps> = ({ children }) => {
  // Retrieving events data by axios
  const events = async () => {
    return await axios.get("https://music-event-360-backend.vercel.app/events");
  };

  const eventsData = useQuery({
    queryKey: ["Events"],
    queryFn: events,
  });

  // Retrieving event services data by axios
  const eventServices = async () => {
    return await axios.get(
      "https://music-event-360-backend.vercel.app/event-services"
    );
  };

  const eventServicesData = useQuery({
    queryKey: ["Event services"],
    queryFn: eventServices,
  });

  // Retrieving event items data by axios
  const eventItems = async () => {
    return await axios.get(
      "https://music-event-360-backend.vercel.app/event-items"
    );
  };

  const eventItemsData = useQuery({
    queryKey: ["Event items"],
    queryFn: eventItems,
  });

  const event360Info = {
    eventsData,
    eventServicesData,
    eventItemsData,
  };

  return (
    <Event360Context.Provider value={event360Info}>
      {children}
    </Event360Context.Provider>
  );
};

export default Event360Provider;
