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
    try {
        const data: ProductPagedList = await fetchProducts();
        return (<article className='container mx-auto'>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {data.content.map(product => (
                    <div key={product.id.toString()} className="h-auto max-w-full rounded-lg">
                        <Product product={product} />
                    </div>))}
            </div>
        </article>);
    } catch (err) {
        return <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium">Network error!</span> Server down.
        </div>
    }
}