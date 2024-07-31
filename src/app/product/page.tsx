import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-2xl font-bold">Product List Page</h1>
        <div className="bg-blue-400 text-white font-semibold p-2 rounded-lg">
          <Link href={"/"}>Homepage</Link>
        </div>
      </div>
      <ul className="flex gap-2 items-center justify-center mt-5">
        <li className="bg-black p-2 rounded-lg text-white font-semibold">
          <Link href={"product/1"}>product 1</Link>
        </li>
        <li className="bg-black p-2 rounded-lg text-white font-semibold">
          <Link href={"product/2"}>product 2</Link>
        </li>
        <li className="bg-black p-2 rounded-lg text-white font-semibold">
          <Link href={"product/3"}>product 3</Link>
        </li>
        <li className="bg-black p-2 rounded-lg text-white font-semibold">
          <Link href={"product/4"}>product 4</Link>
        </li>
      </ul>
    </>
  );
};

export default page;
