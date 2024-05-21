import React from 'react'
import getSingleProduct from '../server/getVariantId'

interface Params {
    params: { slug: { id: number, title: string }[] }
}
const Product = async ({ params, data }: { params: any, data: any }) => {
    // const data = getSingleProduct(Number(params.slug))
    console.log(data,params);

    return (
        <div>
            <h1>NOT YET THIS PAGE</h1>
        </div>
    )
}

export default Product