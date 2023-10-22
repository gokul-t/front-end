import { Metadata } from 'next'
import { IPagedList } from '../types/paged-list-interface'
import Product from './components/product'
import { fetchProducts } from './products.service'
import { IProduct } from './types/product-interface'
import Alert from '../components/alert'

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
        return <Alert title="Network Error!" description={err as string} />
    }
}