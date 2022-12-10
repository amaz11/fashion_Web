/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Feature = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-around mt-5 md:flex-row">
        <h3 className="text-2xl font-bold ">Feature Products</h3>
        <p className="max-w-xl m-10 text-justify md:m-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          beatae mollitia perspiciatis fuga, voluptate ab ipsam doloribus
          molestias facere accusantium!
        </p>
      </div>

      <div className="grid gap-4 mt-5 md:grid-cols-2 lg:grid-cols-4 place-items-center">
        <Link href={`/product/:id`}>
          <div className="max-w-sm w-80 lg:w-40 ">
            <img
              src="https://images.unsplash.com/photo-1614483080746-7739e19960a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="img"
            />
            <span>Lorem ipsum dolor sit amet.</span>
            <p>
              <span className="line-through">$39</span>
              <span> $29.5</span>
            </p>
          </div>
        </Link>
        <Link href={`/product/:id`}>
          <div className="max-w-sm w-80 lg:w-40 ">
            <img
              src="https://images.unsplash.com/photo-1621964275191-ccc01ef2134c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="img"
            />
            <span>Lorem ipsum dolor sit amet.</span>
            <p>
              <span className="line-through">$39</span>
              <span> $29.5</span>
            </p>
          </div>
        </Link>
        <Link href={`/product/:id`}>
          <div className="max-w-sm w-80 lg:w-40 ">
            <img
              src="https://images.unsplash.com/photo-1524600123477-909fbe45c9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"
              alt="img"
            />
            <span>Lorem ipsum dolor sit amet.</span>
            <p>
              <span className="line-through">$39</span>
              <span> $29.5</span>
            </p>
          </div>
        </Link>
        <Link href={`/product/:id`}>
          <div className="max-w-sm w-80 lg:w-40 ">
            <img
              src="https://images.unsplash.com/photo-1622047583743-18ea2c0e7569?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="img"
            />
            <span>Lorem ipsum dolor sit amet.</span>
            <p>
              <span className="line-through">$39</span>
              <span> $29.5</span>
            </p>
          </div>
        </Link>
      </div>

      <div className="hidden grid-cols-4 grid-rows-2 gap-2 mx-5 mt-10 overflow-hidden md:grid grid-lines">
        <div className="max-w-sm box">
          <img
            className="object-cover w-full h-72 "
            src="https://images.unsplash.com/photo-1555069519-127aadedf1ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="img"
          />
        </div>
        <div className="row-span-2 box">
          <img
            className="object-cover h-full "
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80"
            alt="img"
          />
        </div>
        <div className="box">
          <img
            className="object-cover w-full h-72 "
            src="https://images.unsplash.com/photo-1517865288-978fcb780652?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
            alt="img"
          />
        </div>
        <div className="box">
          <img
            className="object-cover w-full h-72 "
            src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="img"
          />
        </div>
        <div className="box">
          <img
            className="object-cover w-full h-72"
            src="https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="img"
          />
        </div>
        <div className="col-start-5 col-end-3 box">
          <img
            className="object-cover w-full h-72 "
            src="https://images.unsplash.com/photo-1519011985187-444d62641929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="img"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-around my-14 md:flex-row">
        <h3 className="text-2xl font-bold ">Trending Products</h3>
        <p className="max-w-xl m-10 text-justify md:m-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          beatae mollitia perspiciatis fuga, voluptate ab ipsam doloribus
          molestias facere accusantium!
        </p>
      </div>

      <div className="grid gap-4 mt-5 md:grid-cols-2 lg:grid-cols-4 place-items-center">
        <div className="max-w-sm w-80 lg:w-40 ">
          <img
            src="https://images.unsplash.com/photo-1614483080746-7739e19960a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="img"
          />
          <span>Lorem ipsum dolor sit amet.</span>
          <p>
            <span className="line-through">$39</span>
            <span> $29.5</span>
          </p>
        </div>
        <div className="max-w-sm w-80 lg:w-40 ">
          <img
            src="https://images.unsplash.com/photo-1621964275191-ccc01ef2134c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="img"
          />
          <span>Lorem ipsum dolor sit amet.</span>
          <p>
            <span className="line-through">$39</span>
            <span> $29.5</span>
          </p>
        </div>
        <div className="max-w-sm w-80 lg:w-40 ">
          <img
            src="https://images.unsplash.com/photo-1524600123477-909fbe45c9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"
            alt="img"
          />
          <span>Lorem ipsum dolor sit amet.</span>
          <p>
            <span className="line-through">$39</span>
            <span> $29.5</span>
          </p>
        </div>
        <div className="max-w-sm w-80 lg:w-40 ">
          <img
            // className="w-80 md:w-40"
            src="https://images.unsplash.com/photo-1622047583743-18ea2c0e7569?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="img"
          />
          <span>Lorem ipsum dolor sit amet.</span>
          <p>
            <span className="line-through">$39</span>
            <span> $29.5</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
