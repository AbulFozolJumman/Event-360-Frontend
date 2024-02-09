// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useContext } from "react";
import { Event360Context } from "../../../Provider/Event360Provider";

const Events = () => {
  const { eventsData } = useContext(Event360Context);
  const { data, isLoading, isError } = eventsData;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      {data?.data?.map((event) => (
        <p key={event?._id}>{event?.name}</p>
      ))}
    </>
  );
};

export default Events;
