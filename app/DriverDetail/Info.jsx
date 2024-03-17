import React from "react";
import { UilLocationPoint, UilOutgoingCall } from "@iconscout/react-unicons";
import { UilAt } from "@iconscout/react-unicons";
import { UilEnvelopeShield } from "@iconscout/react-unicons";
const Info = () => {
  return (
    <div className="max-w-8xl mx-auto px-2 py-6">
      <div className="flex flex-wrap gap-4">
        {/* overview div */}
        <div className="mb-8 bg-white p-4 md:p-6 shadow-md rounded max-w-[800px] max-h-[200px]">
          <h1 className="text-2xl font-semibold mb-3">Goods in Transit</h1>
          <hr className="mb-2 border-b-2 border-gray-200" />
          <p className="mb-4 text-md">
            This policy is designed specifically to protect the goods you're
            transporting while they're in transit. It covers loss, damage, or
            theft of the goods being transported, providing financial
            compensation to replace or repair them.
          </p>
        </div>

        {/* Search Form */}
        <div className="mb-8 bg-white p-6 rounded shadow-md max-w-xs">
          <h2 className="text-2xl font-semibold mb-4">Search</h2>
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

      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col">
          {/* Public Liability */}
          <div className="mb-8 bg-white p-8 rounded shadow-md max-w-[800px]">
            <h1 className="text-2xl font-semibold mb-2">Public Liability </h1>
            <hr className="mb-2 border-b-2 border-gray-200" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              blanditiis vel fugit inventore soluta iure autem dolores enim
              quisquam vitae? Aliquam ullam modi ab repellat libero voluptate
              ipsum neque ipsam.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-white p-8 rounded shadow-md max-w-[800px]">
            <h1 className="text-2xl font-semibold mb-2">
              Contact Driver: John Doe
            </h1>
            <hr className="mb-2 border-b-2 border-gray-200" />
            <ul className="list-disc list-inside">
              <li className="mt-4 flex items-center">
                <UilLocationPoint className="h-5 w-5 text-primary mr-3" />
                123 Main Street, Cityville
              </li>
              <li className="mt-4 flex items-center">
                <UilOutgoingCall className="h-5 w-5 text-primary mr-3" />
                +1 555-123-4567
              </li>
              <li className="mt-4 flex items-center">
                <UilAt className="h-5 w-5 text-primary mr-3" />
                john.doe@gmail.com
              </li>
              <li className="mt-4 flex items-center">
                <UilEnvelopeShield className="h-5 w-5 text-primary mr-3" />
                john.doe@business.com
              </li>
            </ul>
          </div>
        </div>

        {/* Book driver form */}
        <div className="mb-8 bg-white p-6 rounded shadow-md md:max-w-[600px]">
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
      </div>
    </div>
  );
};

export default Info;
