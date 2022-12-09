import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10 p-6 mt-20 text-white bg-blue-500 sm:flex-row ">
        <p className="font-semibold">Be in Touch With us:</p>
        <div>
          <input
            className="p-2 rounded-l-lg"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            className="p-2 bg-black rounded-r-lg "
            type="submit"
            value="Join Us"
          />
        </div>
        <div>
          <div className="flex gap-2 text-xl ">
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-instagram" />
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-tiktok" />
            <i className="fa-brands fa-dribbble" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
