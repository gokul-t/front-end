import { Metadata } from 'next'
import { IPagedList } from '../types/paged-list-interface'
import Product from './components/product'
import { fetchProducts } from './products.service'
import { IProduct } from './types/product-interface'

export const metadata: Metadata = {
    title: 'Products',
}

export type ProductPagedList = IPagedList<IProduct>

export default async function Products() {
    const data: ProductPagedList = await fetchProducts();
    return <article className='container mx-auto'>{data.content.map(product => (<Product key={product.id.toString()} product={product} />))}</article>
}