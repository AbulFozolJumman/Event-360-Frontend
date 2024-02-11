// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useContext, useState } from "react";
import { Event360Context } from "../../../Provider/Event360Provider";
import Loader from "../../../Components/Loader/Loader";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Events = () => {
  // Importing data from context API
  const { eventsData } = useContext(Event360Context);
  const { data, isLoading, isError } = eventsData;

  // Add event item Modal function
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Event item POST operation
  const queryClient = useQueryClient();

  const { mutateAsync: postMutateAsync } = useMutation({
    mutationFn: async (data) => {
      return await fetch("https://music-event-360-backend.vercel.app/events", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["Events"]);
    },
  });

  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    const addEvents = {
      name,
      imgUrl,
    };
    await postMutateAsync(addEvents);
    alert("Event added successfully");
    // Close the modal
    handleCloseModal();
  };

  // Update event Modal function
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [Uid, setUid] = useState("");

  const handleOpenModal2 = (id) => {
    setUid(id);
    setIsModalOpen2(true);
  };

  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
  };

  // Event item UPDATE operation
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    // Handle form submission
    const updateEvents = {
      name,
      imgUrl,
    };
    // fetching
    fetch(`https://music-event-360-backend.vercel.app/events/${Uid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateEvents),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          console.log(updateEvents);
          alert("Event Updated successfully");
          location.reload(true);
        }
      });
    // Close the modal
    handleCloseModal2();
  };

  // Event item DELETE operation
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`https://music-event-360-backend.vercel.app/events/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            location.reload(true);
          }
        });
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    <p className="flex items-center justify-center font-extrabold text-red-500">
      Something went wrong
    </p>;
  }

  return (
    <>
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Image</th>
              <th className="py-2 px-4 text-center">Action</th>
            </tr>
          </thead>
          {data &&
            data?.data?.map((e) => (
              <tbody key={e._id}>
                <tr className="border-b">
                  <td className="py-2 px-4">{e.name}</td>
                  <td className="py-2 px-4">
                    <img
                      src={e.imgURL}
                      alt={e.name}
                      className="w-20 h-20 rounded-md"
                    />
                  </td>
                  <td className="py-2 px-1">
                    <div className="flex flex-col justify-center items-center gap-2">
                      {/* Update event modal btn */}
                      <button
                        onClick={() => handleOpenModal2(e._id)}
                        className="bg-[#5a01cb] text-white hover:bg-white hover:text-[#5a01cb] border border-[#5a01cb] py-2 px-4 rounded"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(e._id)}
                        className="bg-red-500 text-white hover:bg-white hover:text-red-500 border border-red-500 py-2 px-5 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Add more rows here */}
              </tbody>
            ))}
        </table>
      </div>

      {/* Add event Modal btn */}
      <button
        onClick={handleOpenModal}
        className="w-[300px] text-center py-2 bg-[#5a01cb] text-white hover:bg-white hover:text-[#5a01cb] border border-[#5a01cb] rounded mx-auto block mt-6"
      >
        Add Event
      </button>

      {/* Add event Modal */}
      <div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Add Event</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-medium">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="imgUrl" className="block font-medium">
                    Image URL:
                  </label>
                  <input
                    type="text"
                    id="imgUrl"
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 text-center py-2 bg-[#5a01cb] text-white hover:bg-white hover:text-[#5a01cb] border border-[#5a01cb] rounded"
                >
                  Submit
                </button>
                <button
                  onClick={handleCloseModal}
                  className="px-4 text-center py-2 bg-red-500 text-white hover:bg-white hover:text-red-500 border border-red-500 rounded ml-2"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Update event modal */}
      <div>
        {isModalOpen2 && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg md:w-[50%]">
              <h2 className="text-xl font-semibold mb-4">Add Event Item</h2>
              <form onSubmit={handleSubmit2}>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-medium">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="imgUrl" className="block font-medium">
                    Image URL:
                  </label>
                  <input
                    type="text"
                    id="imgUrl"
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 text-center py-2 bg-[#5a01cb] text-white hover:bg-white hover:text-[#5a01cb] border border-[#5a01cb] rounded"
                >
                  Submit
                </button>
                <button
                  onClick={handleCloseModal2}
                  className="px-4 text-center py-2 bg-red-500 text-white hover:bg-white hover:text-red-500 border border-red-500 rounded ml-2"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Events;
