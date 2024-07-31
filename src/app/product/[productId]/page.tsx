import React from 'react'

const page = ({params}:{params:{productId:string}}) => {
  return (
    <div>
        <h1 className='text-2xl'>Nested Product Page</h1>
        <p>This is product {params.productId} page</p>
    </div>
  )
}

export default page