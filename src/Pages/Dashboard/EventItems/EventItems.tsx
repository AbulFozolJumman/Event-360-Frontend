// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useContext } from "react";
import { Event360Context } from "../../../Provider/Event360Provider";

const EventItems = () => {
  const { eventItemsData } = useContext(Event360Context);
  const { data, isLoading, isError } = eventItemsData;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }
  return (
    <>
      {data?.data?.map((eventItem) => (
        <p key={eventItem?._id}>{eventItem?.name}</p>
      ))}
    </>
  );
};

export default EventItems;
