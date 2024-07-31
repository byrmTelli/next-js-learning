import React from 'react'

const page = ({params}:{params:{productId:string,reviewId:string}}) => {
  return (
    <div>
        <h1>This is {params.productId} page reviews and this is {params.reviewId} page.</h1>
    </div>
  )
}

export default page