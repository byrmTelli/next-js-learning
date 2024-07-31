import React from 'react'

const page = ({params}:{params:{productId:string}}) => {
  return (
    <div>
        <h1>This is {params.productId} page reviews page.</h1>
    </div>
  )
}

export default page