import Image from "next/image";
import React, { useState } from "react";

const Singleproduct = () => {
  const [num, setnum] = useState(1);
  const handelDecrement = () => (num > 1 ? setnum(num - 1) : setnum(1));
  // 5 =stock value
  const handelInrement = () => (num < 5 ? setnum(num + 1) : setnum(5));
  const handelReset = () => setnum(1);
  return (
    <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 place-items-center">
      <div>
        <Image
          src={`https://images.unsplash.com/photo-1614483080746-7739e19960a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`}
          width={200}
          height={100}
          alt="img"
        />
      </div>
      <div className="flex flex-col items-center justify-start gap-2 sm:items-start">
        <h1 className="text-2xl font-semibold text-black">Black Coat</h1>
        <p className="max-w-xs text-justify ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          sequi?
        </p>
        {/* <input
          className="border rounded focus:border-primary border-primary "
          type="number"
          id="quantity"
          name="quantity"
          value={num}
          onChange={() => setnum(num + 1)}
          min="1"
          max="5"
        /> */}
        <div className="flex gap-3">
          <button
            className="px-4 text-white rounded bg-primary"
            onClick={handelDecrement}
          >
            -
          </button>
          <div className="px-6 border border-primary">{num}</div>
          <button
            className="px-4 text-white rounded bg-primary"
            onClick={handelInrement}
          >
            +
          </button>
          <button
            className="px-4 text-white rounded bg-primary"
            onClick={handelReset}
          >
            <i className="fa-solid fa-rotate-left"></i>
          </button>
        </div>
        <p>
          <span className="line-through">$39</span>
          <span className="text-xl font-bold"> $29.5</span>
        </p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Singleproduct;
