"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handlePreviousPage = () => {
    router.back();
  };

  return (
    <div className="">
      <h1>Homepage</h1>
      <div className="">
        <Link href={"product"}>Products Page</Link>
      </div>
      <div className="flex gap-2">
        <button
          className="rounded-lg bg-blue-400 p-2 font-semibold text-white"
          onClick={handlePreviousPage}
        >
          Previous
        </button>
      </div>
    </div>
  );
}
