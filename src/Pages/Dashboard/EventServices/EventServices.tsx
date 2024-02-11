// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useContext, useState } from "react";
import { Event360Context } from "../../../Provider/Event360Provider";
import Loader from "../../../Components/Loader/Loader";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const EventServices = () => {
  // Importing data from context API
  const { eventServicesData } = useContext(Event360Context);
  const { data, isLoading, isError } = eventServicesData;

  // Add event service Modal function
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [services, setServices] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Event service POST operation
  const queryClient = useQueryClient();

  const { mutateAsync: postMutateAsync } = useMutation({
    mutationFn: async (data) => {
      return await fetch(
        "https://music-event-360-backend.vercel.app/event-services",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "content-type": "application/json",
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["Event services"]);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    const addEventService = {
      name,
      services,
    };
    await postMutateAsync(addEventService);
    alert("Event service added successfully");
    // Close the modal
    handleCloseModal();
  };

  // Update event service Modal function
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [Uid, setUid] = useState("");

  const handleOpenModal2 = (id) => {
    setUid(id);
    setIsModalOpen2(true);
  };

  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
  };

  // Event service UPDATE operation
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    // Handle form submission
    const updateEventService = {
      name,
      services,
    };
    // fetching
    fetch(`https://music-event-360-backend.vercel.app/event-services/${Uid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateEventService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          console.log(updateEventService);
          alert("Event service Updated successfully");
          location.reload(true);
        }
      });
    // Close the modal
    handleCloseModal2();
  };

  // Event service DELETE operation
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`https://music-event-360-backend.vercel.app/event-services/${id}`, {
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
    return (
      <p className="flex items-center justify-center font-extrabold text-red-500">
        Something went wrong
      </p>
    );
  }
  return (
    <>
      {/* Event service table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-1 text-left">Name</th>
              {/* <th className="py-2 px-1 text-left">Image</th> */}
              <th className="py-2 px-1 text-left">Services</th>
              <th className="py-2 px-1 text-center">Action</th>
            </tr>
          </thead>

          {data &&
            data?.data?.map((e) => (
              <tbody key={e._id}>
                <tr className="border-b">
                  <td className="py-2 px-1">{e.name}</td>
                  {/* <td className="py-2 px-1">
                    <img
                      src={e.services}
                      alt="User Avatar"
                      className="w-20 h-20 rounded-md"
                    />
                  </td> */}
                  <td className="py-2 px-1">
                    {e.services.split(",").map((n, index) => (
                      <p key={index} className="m-1 p-1 bg-gray-200">
                        {n}
                      </p>
                    ))}
                  </td>
                  <td className="py-2 px-1">
                    <div className="flex flex-col justify-center items-center gap-2">
                      {/* Update event service modal btn */}
                      <button
                        onClick={() => handleOpenModal2(e._id)}
                        className="py-2 px-4 bg-[#5a01cb] text-white hover:bg-white hover:text-[#5a01cb] border border-[#5a01cb] rounded"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(e._id)}
                        className="py-2 px-5 bg-red-500 text-white hover:bg-white hover:text-red-500 border border-red-500 rounded"
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

      {/* Add event service Modal btn */}
      <button
        onClick={handleOpenModal}
        className="w-[300px] text-center py-2 bg-[#5a01cb] text-white hover:bg-white hover:text-[#5a01cb] border border-[#5a01cb] rounded mx-auto block mt-6"
      >
        Add Event Services
      </button>

      {/* Add event service Modal */}
      <div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[80%]">
              <h2 className="text-xl font-semibold mb-4">Add Event Services</h2>
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
                  <label htmlFor="services" className="block font-medium">
                    Services:
                  </label>
                  <input
                    type="text"
                    id="services"
                    value={services}
                    onChange={(e) => setServices(e.target.value)}
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

      {/* Update event service modal */}
      <div>
        {isModalOpen2 && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[80%]">
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
                  <label htmlFor="services" className="block font-medium">
                    Services:
                  </label>
                  <input
                    type="text"
                    id="services"
                    value={services}
                    onChange={(e) => setServices(e.target.value)}
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

export default EventServices;
