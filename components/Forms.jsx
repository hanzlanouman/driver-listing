import React from "react";
const FormsD = () => {
  return (
    <div>
      {/* book driver form  */}
      <div className="mb-8 bg-white p-8 rounded-sm shadow-md w-full md:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Book Driver</h2>
        <hr className="mb-2 border-b-2 border-gray-200" />

        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="date" className="font-semibold">
              Select Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="descriptionA" className="font-semibold">
              Description A
            </label>
            <textarea
              id="descriptionA"
              name="descriptionA"
              rows="1"
              className="border border-gray-300 rounded p-2"
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label htmlFor="descriptionB" className="font-semibold">
              Description B
            </label>
            <textarea
              id="descriptionB"
              name="descriptionB"
              rows="1"
              className="border border-gray-300 rounded p-2"
            ></textarea>
          </div>

          <button
            type="button"
            className="text-white px-4 py-2 rounded mt-4 bg-primary w-full"
          >
            Book Driver
          </button>
        </form>
      </div>
      {/* search */}
      <div className="mb-4 bg-white p-4 md:p-6 rounded-sm shadow-md  w-full md:w-1/3">
        <h1 className="text-2xl font-semibold mb-2">Search</h1>
        <hr className="mb-2 border-b-2 border-gray-200" />
        <form className="space-y-4">
          <div className="flex flex-col">
            <textarea
              id="Search"
              name="Search"
              rows="1"
              className="border border-gray-300 rounded p-2 w-full"
              placeholder="Search..."
            ></textarea>
          </div>

          <button
            type="button"
            className="text-white px-4 py-2 rounded mt-4 bg-primary"
          >
            Search
          </button>
        </form>
      </div>

    </div>
  );
};

export default FormsD;
