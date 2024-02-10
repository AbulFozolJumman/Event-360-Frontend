// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useContext, useState } from "react";
import { Event360Context } from "../../../Provider/Event360Provider";
import Loader from "../../../Components/Loader/Loader";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const EventItems = () => {
  // Importing data from context API
  const { eventItemsData } = useContext(Event360Context);
  const { data, isLoading, isError } = eventItemsData;

  // Add event item Modal function
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Update event item Modal function
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
  };

  // Event item POST function
  const queryClient = useQueryClient();

  const { mutateAsync: postMutateAsync } = useMutation({
    mutationFn: async (data) => {
      return await fetch(
        "https://music-event-360-backend.vercel.app/event-items",
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
      queryClient.invalidateQueries(["Event items"]);
    },
  });

  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    const addEventItems = {
      name,
      imgUrl,
    };
    await postMutateAsync(addEventItems);
    alert("Items added successfully");
    // Close the modal
    handleCloseModal();
  };

  // Event item UPDATE function
  // const [name2, setName2] = useState("");
  // const [imgUrl2, setImgUrl2] = useState("");

  const handleSubmit2 = async (e, id) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    const updateEventItems = {
      name,
      imgUrl,
    };
    // fetching
    fetch(`https://music-event-360-backend.vercel.app/event-items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateEventItems),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          console.log(updateEventItems);
          alert("Event item Updated successfully");
          location.reload(true);
        }
      });
    // Close the modal
    handleCloseModal2();
  };

  // Event item DELETE function
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`https://music-event-360-backend.vercel.app/event-items/${id}`, {
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
    return <p>Something went wrong</p>;
  }

  return (
    <>
      {/* Event item table */}
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
            data?.data?.map((i) => (
              <tbody key={i._id}>
                <tr className="border-b">
                  <td className="py-2 px-4">{i.name}</td>
                  <td className="py-2 px-4">
                    <img
                      src={i.imgURL}
                      alt={i.name}
                      className="w-20 h-20 rounded-md"
                    />
                  </td>
                  <td className="py-2 px-1">
                    <div className="flex flex-col justify-center items-center gap-2">
                      {/* Update event modal btn */}
                      <button
                        onClick={handleOpenModal2}
                        className="bg-[#5a01cb] py-2 px-4 text-white rounded"
                      >
                        Update
                      </button>

                      {/* Update event modal */}
                      <div>
                        {isModalOpen2 && (
                          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                              <h2 className="text-xl font-semibold mb-4">
                                Add Event Item
                              </h2>
                              <form onSubmit={(e) => handleSubmit2(e, i._id)}>
                                <div className="mb-4">
                                  <label
                                    htmlFor="name"
                                    className="block font-medium"
                                  >
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
                                  <label
                                    htmlFor="imgUrl"
                                    className="block font-medium"
                                  >
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

                      <button
                        onClick={() => handleDelete(i._id)}
                        className="bg-red-500 py-2 px-5 text-white rounded"
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

      {/* Add event item Modal btn */}
      <button
        onClick={handleOpenModal}
        className="w-[300px] text-center py-2 bg-[#5a01cb] text-white hover:bg-white hover:text-[#5a01cb] border border-[#5a01cb] rounded mx-auto block mt-6"
      >
        Add Event Item
      </button>

      {/* Add event item Modal */}
      <div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Add Event Item</h2>
              <form onSubmit={handleSubmit}>
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
                    required
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
    </>
  );
};

export default EventItems;
