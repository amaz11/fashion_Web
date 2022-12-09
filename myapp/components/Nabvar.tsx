import Image from "next/image";
import React from "react";

const Nabvar = () => {
  return (
    <div className="fixed top-0 z-50 w-full max-w-full text-white bg-blue-500 ">
      <nav className="flex items-center justify-between p-2 m-2">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1563694983011-6f4d90358083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            width={20}
            height={10}
            alt="logo"
          />
        </div>
        <ul className="justify-around hidden text-2xl text-center sm:flex ">
          <li className="p-2 text-center rounded hover:bg-blue-700">
            <a href="">Home</a>
          </li>
          <li className="p-2 text-center rounded hover:bg-blue-700">
            <a href="">Products</a>
          </li>
          <li className="p-2 text-center rounded hover:bg-blue-700">
            <a href="">About</a>
          </li>
          <li className="p-2 text-center rounded hover:bg-blue-700">
            <a href="">Contacts</a>
          </li>
        </ul>
        <i className="text-lg sm:hidden hover:rounded-lg ">...</i>
      </nav>
    </div>
  );
};

export default Nabvar;
