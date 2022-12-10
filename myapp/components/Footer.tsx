import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full gap-10 p-6 my-20 text-white bg-secondary sm:flex-row ">
        <p className="font-semibold">Be in Touch With us:</p>
        <div>
          <input
            className="p-2 text-black rounded-l-lg"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            className="p-2 rounded-r-lg cursor-pointer bg-primary "
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
      <div className="grid justify-center grid-rows-2 gap-4 mx-10 mt-10 sm:grid-cols-2 sm:mx-52 lg:grid-cols-4 ">
        <div>
          1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          impedit voluptate in nulla. Neque nulla amet tempora nihil et
          provident, deserunt, quam dignissimos animi laborum ducimus, veniam
          fugit doloribus ex!
        </div>
        <div>
          2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          impedit voluptate in nulla. Neque nulla amet tempora nihil et
          provident, deserunt, quam dignissimos animi laborum ducimus, veniam
          fugit doloribus ex!
        </div>
        <div>
          3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          impedit voluptate in nulla. Neque nulla amet tempora nihil et
          provident, deserunt, quam dignissimos animi laborum ducimus, veniam
          fugit doloribus ex!
        </div>
        <div>
          4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          impedit voluptate in nulla. Neque nulla amet tempora nihil et
          provident, deserunt, quam dignissimos animi laborum ducimus, veniam
          fugit doloribus ex!
        </div>
      </div>
    </div>
  );
};

export default Footer;
