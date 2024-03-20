import {
  UilLocationPoint,
  UilOutgoingCall,
  UilAt,
  UilEnvelopeShield,
} from "@iconscout/react-unicons";
import FormsD from "./Forms";
import { UisStar } from "@iconscout/react-unicons-solid";

const Info = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 py-8 grid md:grid-cols-1 xl:grid-cols-2  xl:gap-60">

      {/* div 1 */}
      <div className="flex flex-wrap gap-2 md:flex-col  lg:w-full xl:w-[880px]">
        <div className="mb-6 bg-white p-6 md:p-8 shadow-md rounded-sm w-full">
          <h1 className="text-3xl font-bold mb-4">Goods in Transit</h1>
          <hr className="mb-4 border-t border-gray-300" />
          <p className="text-lg">
            This policy is designed specifically to protect the goods you're
            transporting while they're in transit. It covers loss, damage, or
            theft of the goods being transported, providing financial
            compensation to replace or repair them.
          </p>
        </div>
        <div className="mb-8 bg-white p-8 rounded-sm shadow-md w-full">
          <h1 className="text-3xl font-bold mb-4">Public Liability</h1>
          <hr className="mb-4 border-t border-gray-300" />
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            blanditiis vel fugit inventore soluta iure autem dolores enim
            quisquam vitae? Aliquam ullam modi ab repellat libero voluptate
            ipsum neque ipsam.
          </p>
        </div>
        <div className="bg-white p-8 rounded-sm shadow-md w-full">
          <h1 className="text-3xl font-bold mb-4">Contact Driver: John Doe</h1>
          <hr className="mb-4 border-t border-gray-300" />
          <ul className="list-disc list-inside">
            <li className="flex items-center mb-4">
              <UilLocationPoint className="h-6 w-6 text-primary mr-3" />
              123 Main Street, Cityville
            </li>
            <li className="flex items-center mb-4">
              <UilOutgoingCall className="h-6 w-6 text-primary mr-3" />
              +1 555-123-4567
            </li>
            <li className="flex items-center mb-4">
              <UilAt className="h-6 w-6 text-primary mr-3" />
              john.doe@gmail.com
            </li>
            <li className="flex items-center">
              <UilEnvelopeShield className="h-6 w-6 text-primary mr-3" />
              john.doe@business.com
            </li>
          </ul>
        </div>
        {/* Reviews */}
        <div className="mb-6 mt-4 bg-white p-6 rounded-sm shadow-md w-full">
          <div className="flex justify-between items-center gap-4 mb-4">
            <p className="text-2xl font-semibold">Reviews</p>
            <button className="text-white bg-primary px-2 py-1 lg:px-4 lg:py-2 flex items-center">
              <UisStar className="h-5 w-5 mr-1 text-secondary" />
              Write your review
            </button>
          </div>
          <hr className="my-4 border-b-2 border-gray-200" />
          <div className="flex flex-col md:flex-column items-center justify-center">
            <div className="flex items-center mb-2 ">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <UisStar key={index} className="h-10 w-5 text-pink-500" />
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-gray-600 mb-2">1 Review</p>
            </div>
          </div>
        </div>

        {/* Write Review Form */}
        <div className="mb-8 bg-white p-6 rounded-sm shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Write Your Review</h2>
          <p className="italic text-pink-500 mb-2">
            Your email address will not be published. Required fields are marked
            *
          </p>

          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="rating" className="font-semibold">
                Rating *
              </label>
              {/* Rating stars component goes here */}
            </div>
            <div className="flex flex-col">
              <label htmlFor="comment" className="font-semibold">
                Comment *
              </label>
              <textarea
                id="comment"
                name="comment"
                rows="6"
                className="border border-gray-300 rounded p-2"
              ></textarea>
            </div>
            <div className="mt-6 flex flex-col">
              <label htmlFor="name" className="font-semibold">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 rounded p-2 sm:w-full md:w-3/4 lg:w-1/2"
                placeholder="Your Name"
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label htmlFor="email" className="font-semibold">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded p-2 sm:w-full md:w-3/4 lg:w-1/2"
                placeholder="Your Email"
              />
            </div>
            <button
              type="submit"
              className="text-secondary px-4 py-2 rounded mt-4 bg-primary"
            >
              Leave a review
            </button>
          </form>
        </div>

      </div>

      {/* div 2 */}
      <div className="flex gap-20 md:flex-col xl:ml-40 ">
        <FormsD />
      </div>
    </div>
  );
};

export default Info;