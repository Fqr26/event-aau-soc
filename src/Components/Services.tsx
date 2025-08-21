// import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
function Services() {
  //   const servicesList = [
  //     {
  //       id: 1,
  //       title: "Expose students to the latest marketing trends, tools, and strategies",
  //       description:
  //         "The Marketing Trends Seminar, Exhibition & Networking event will provide a well-rounded learning experience by combining expert insights, creative showcases, and professional networking.",
  //       logo: "public/R12.jpg",
  //     },
  //     {
  //       id: 2,
  //       title: "Faculty members in related fields. Invited local marketing professionals and entrepreneurs",
  //       description:
  //         " Stronger ties between the university and the business community. Opportunities for students to learn from and connect with industry experts.",
  //       logo: "public/R8.jpg",
  //     },
  //     {
  //       id: 3,
  //       title: "Provide a platform to showcase creative marketing projects",
  //       description:
  //         "Opportunities for students to present and promote creative work.Enhanced networking and communication skill",
  //       logo: "public/dig.jpg",
  //     },
  //     {
  //       id: 4,
  //       title: "Increased awareness of current and future marketing trends",
  //       description:
  //         "Inspire students to apply innovative and impactful marketing concepts.",
  //       logo: "public/contentmarket4.jpg",
  //     },
  //   ];
  return (
    <div className="px-12 mt-0 bg-blue-50 shadow-md">
      <div className="flex items-center">
        <div className="w-[20px] h-[7px] bg-blue-600 rounded-full"></div>
        <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
        <h2 className="text-[24px] text-center py-10 font-bold">
          OUR Event
        </h2>
        <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
        <div className="w-[20px] h-[7px] bg-blue-600 rounded-full"></div>
      </div>
      {/* product card 1 */}
      <div className="flex space-x-3">
        <div className="flex flex-col w-[1200px] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg shadow-md h-[200x]"
              src="/R12.jpg"
              alt="image1"
            />
          </a>
          <div className="flex-grow p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Expose students to the latest marketing trends, tools, and strategies
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-400">
              The Marketing Trends Seminar, Exhibition & Networking event will provide a well-rounded learning experience by 
              combining expert insights, creative showcases, and professional networking.
            </p>
            <IoArrowForwardOutline className="bg-blue-500 text-[35px] p-2 text-white ml-24 rounded-full cursor-pointer hover:scale-110 transition-all" />
          </div>
        </div>

        {/* product card 2 */}
        <div className="flex flex-col w-[1200px] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg shadow-md h-[290px]"
              src="/R8.jpg"
              alt="image1"
            />
          </a>
          <div className="flex-grow p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Faculty members in related fields.
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-400">
              Stronger ties between the university and the business community. 
              Opportunities for students to learn from and connect with industry experts.
            </p>
            <IoArrowForwardOutline className="bg-blue-500 text-[35px] p-2 text-white ml-24 rounded-full cursor-pointer hover:scale-110 transition-all" />
          </div>
        </div>

        {/* product card 3*/}
        <div className="w-[1200px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg shadow-md h-[290px]"
              src="/dig.jpg"
              alt="product image"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Provide a platform to showcase creative marketing projects.
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-400">
              Opportunities for students to present and 
              promote creative work.Enhanced networking and communication skill
            </p>

            <IoArrowForwardOutline className="bg-blue-500 text-[35px] ml-24 p-2 text-white items-center rounded-full cursor-pointer hover:scale-110 transition-all" />
          </div>
        </div>
        {/* product card 4 */}
        <div className="flex flex-col w-[1200px] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg shadow-md h-[550x]"
              src="/contentmarket4.jpg"
              alt="image1"
            />
          </a>
          <div className="flex-grow p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Increased awareness of current and future marketing trends.
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-400">
              Inspire students to apply innovative and impactful marketing concepts.
            </p>
            <IoArrowForwardOutline className="bg-blue-500 text-[35px] p-2 text-white ml-24 rounded-full cursor-pointer hover:scale-110 transition-all" />
          </div>
        </div>
      </div>
      {/*<div className="flex flex-col md:flex-row space-x-3 ">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#"></a>
          {servicesList.map((item) => (
            <div className="text-center flex flex-col justify-center items-center gap-6">
              <div className="bg-gray-200 rounded-full w-[80px] h-[80px]">
                <img
                  src={item.logo}
                  className="w-[200px] h-[80px] rounded-full p-5 hover:scale-110 transition-all cursor-pointer"
                />
              </div>

              <h2 className="mt-5 font-bold">{item.title}</h2>
              <h2 className="text-gray-400">{item.description}</h2>
              <IoArrowForwardOutline className="bg-blue-500 text-[35px] p-2 text-white rounded-full cursor-pointer hover:scale-110 transition-all" />
            </div>
          ))}
        </div>
      </div> */ }
    </div>
  );
}

export default Services;
