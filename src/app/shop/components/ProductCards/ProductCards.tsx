import React from 'react'
import { getProductsVariantId } from '../../service/getproductVariantId'
import { NextPage } from 'next'
import { VarinatCard } from '../variant-card/varinat-card'

export const ProductShop: NextPage<{ params: { categoryId: number } }> = async ({ params }) => {
    const productCategoryariant = await getProductsVariantId(params.categoryId);

    return (
        <div className="flex items-center flex-wrap gap-2">
            {productCategoryariant?.results?.map((data) => (
                <VarinatCard {...data} key={data.id} />
            ))}
        </div>
    )
}
