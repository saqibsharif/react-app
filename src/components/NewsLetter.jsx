import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full px-4 py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="my-4 lg:col-span-2">
          <h1 className="py-2 text-2xl font-bold md:text-4xl sm:text-3xl">
            Want tips & tricks to optimize your flow ?
          </h1>
          <p className="">Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-3">
          <div className="flex flex-col items-center justify-between w-full sm:flex-row">
            <input
              className="flex w-full p-3 text-black rounded-md"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 py-3 ml-4">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <a className="text-[#00df9a] underline" href="index.html">
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
