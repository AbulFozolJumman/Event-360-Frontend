// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useContext, useState } from "react";
import { Event360Context } from "../../../Provider/Event360Provider";
import { Vortex } from "react-loader-spinner";
import Loader from "../../../Components/Loader/Loader";

const EventServices = () => {
  const { eventServicesData } = useContext(Event360Context);
  const { data, isLoading, isError } = eventServicesData;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log("Name:", name);
    console.log("Image URL:", imgUrl);
    // Close the modal
    handleCloseModal();
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Vortex
          visible={true}
          height="100"
          width="100"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    );
  }
  return (
    <>
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

          {/* {data?.data?.map((event) => (
        <p key={event?._id}>{event?.name}</p>
      ))} */}
          {data &&
            data?.data?.map((e) => (
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-1">{e.name}</td>
                  {/* <td className="py-2 px-1">
                    <img
                      src={e.imgURL}
                      alt="User Avatar"
                      className="w-20 h-20 rounded-md"
                    />
                  </td> */}
                  <td className="py-2 px-1">
                    {e.services.split(",").map((n) => (
                      <p className="m-1 p-1 bg-gray-200">{n}</p>
                    ))}
                  </td>
                  <td className="py-2 px-1">
                    <div className="flex flex-col justify-center items-center gap-2">
                      <button className="bg-[#5a01cb] py-2 px-4 text-white rounded">
                        Update
                      </button>
                      <button className="bg-red-500 py-2 px-5 text-white rounded">
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

      {/* Modal */}

      <button
        onClick={handleOpenModal}
        className="w-[300px] text-center py-2 bg-[#5a01cb] text-white hover:bg-white hover:text-[#5a01cb] border border-[#5a01cb] rounded mx-auto block mt-6"
      >
        Add Event Services
      </button>

      <div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
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
    </>
  );
};

export default EventServices;
