import React from "react";

const Page = () => {
  return (
    <div className="w-full max-w-[1184px] h-[1200px]">
      <div
        className=" h-[410px] "
        style={{ backgroundImage: "url('/images/unsplash_4ycv3Ky1ZZU.png')" }}
      >
        <h1 className="text-[white] font-[700]  font-inter text-[48px] flex  pt-[100px] justify-center items-center">
          {" "}
          404 Error
        </h1>
        <p className="text-[white] font-inter font-normal text-[20px] flex justify-center">
          Home /<span className="text-[#FF9F0D]">404</span>
        </p>
      </div>
      <div className="text-center ">
        <h1 className=" text-[#FF9F0D] mt-[150px] font-inter font-[700] text-[96px]">
          404
        </h1>
        <h2 className=" font-inter  font-[700] mb-3 text-[32px] text-[#333333]">
          Oops! Look likes something going wrong
        </h2>
        <p className="font-inter  font-normal text-[18px] mb-4">
          Page Cannot be found! we’ll have it figured out in no time.Menwhile,
          cheek out these fresh ideas:
        </p>
        <button className="px-8 py-4 bg-[#FF9F0D] font-inter  rounded-[6px] text-white">
          Go to home
        </button>
      </div>
    </div>
  );
};

export default Page;
