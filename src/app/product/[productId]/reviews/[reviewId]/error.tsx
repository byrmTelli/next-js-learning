"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="text-red-500 text-3xl font-bold">
      Something went wrong in reviewId...:
      <br />
      {error.message}
      <br />
      <button
        className="bg-yellow-400 p-2 text-sm rounded-lg text-black border border-gray-400"
        onClick={reset}
      >
        Reload The Page
      </button>
    </div>
  );
}
