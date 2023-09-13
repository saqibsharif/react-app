import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full px-4 py-16 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="py-2 text-2xl font-bold md:text-4xl sm:text-3xl">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            nulla omnis aperiam tenetur. Praesentium dignissimos mollitia nemo
            autem tempore amet, fugit beatae atque? Excepturi animi, sit
            voluptate neque aspernatur nulla?
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
