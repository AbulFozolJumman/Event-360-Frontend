// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useContext } from "react";
import { Event360Context } from "../../../Provider/Event360Provider";

const EventServices = () => {
  const { eventServicesData } = useContext(Event360Context);
  const { data, isLoading, isError } = eventServicesData;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }
  return (
    <>
      {data?.data?.map((eventService) => (
        <p key={eventService?._id}>{eventService?.name}</p>
      ))}
    </>
  );
};

export default EventServices;
