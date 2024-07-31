"use client";
import { useRouter } from "next/navigation";

export default function PlaceOrder() {
  const router = useRouter();

  const handleRoute = () => {
    console.log("Placing your order...");
    router.push("/");
    /*
    router.back() previous page
    router.forward() next page
    */
  };
  return (
    <>
      <h1>Place Order Page</h1>
      <button
        className="rounded-lg text-white bg-red-500 p-2"
        onClick={handleRoute}
      >
        Place Order
      </button>
    </>
  );
}
