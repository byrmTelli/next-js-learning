"use client";
import React from "react";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const page = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading in reviews");
  }

  return (
    <div>
      <h1>
        This is {params.productId} page reviews and this is {params.reviewId}{" "}
        page.
      </h1>
    </div>
  );
};

export default page;
