import React from "react";
import LibraryImg from "../../assets/website/library.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

function Banner() {
  return (
    <div className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          {/* sekil */}
          <div>
            <img
              data-aos="zoom-in"
              className="max-w-[400px] block mx-auto h-[350px] w-full
            drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              src={LibraryImg}
              alt=""
            />
          </div>
          {/* yazi hissesi */}
          <div
            data-aos="slide-up"
            className="flex flex-col justify-center 
          gap-6 sm:pt-0"
          >
            <h1 className="text-3xl sm:text-4xl font-bold">
              Library at your fingertips
            </h1>
            <p className="text-sm text-gray-500 tracking-wide leading-5">
              Access a world of books anytime, anywhere with our extensive
              digital library. From bestsellers to hidden gems, you can
              discover, read, and enjoy a diverse range of titles with just a
              few clicks. Whether you’re at home or on the go, our library
              brings the joy of reading right to your fingertips, making it
              easier than ever to immerse yourself in the stories you love.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Books</p>
              </div>
              <div className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment method</p>
              </div>
              <div className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get Offers on Books</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
