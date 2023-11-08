import { Metadata } from 'next'

import Alert from '../components/alert'
import Product from './components/product'
import { fetchProducts } from './products.service'
import { ProductPagedList } from './types/product-interface'

export const metadata: Metadata = {
    title: 'Products',
}

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